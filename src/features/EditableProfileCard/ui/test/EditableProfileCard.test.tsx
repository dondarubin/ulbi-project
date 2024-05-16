import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { IProfile } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import userEvent from '@testing-library/user-event';
import { fireEvent, screen } from '@testing-library/react';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from '../EditableProfileCard';

const profileData: IProfile = {
  city: 'Moscow',
  age: 21,
  firstname: 'admin123',
  lastname: 'admin123',
  username: 'admin',
  country: Country.RUSSIA,
  currency: Currency.RUB,
  avatar: '',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      isLoading: false,
      profileData,
      profileFormData: profileData,
    },
    user: {
      authData: {
        userId: 1,
        userName: 'dondarubin',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('features/EditableProfileCard', () => {
  test('Check CancelBtn', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
    // Появилась ли кнопка "отменить"
    expect(screen.getByTestId('EditableProfileCardHeader.CancelBtn'));
  });

  test('When cancel profileFormData must be equal profileData', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

    // Очищаем инпуты
    await userEvent.clear(screen.getByTestId('ProfileCard.InputFirstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.InputLastname'));

    // Передаем новое значение в инпуты
    await userEvent.type(screen.getByTestId('ProfileCard.InputFirstname'), 'user');
    await userEvent.type(screen.getByTestId('ProfileCard.InputLastname'), 'user');

    // Попало ли измененое значение в инпут
    expect(screen.getByTestId('ProfileCard.InputFirstname')).toHaveValue('user');
    expect(screen.getByTestId('ProfileCard.InputLastname')).toHaveValue('user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelBtn'));

    // Равны ли значение я инпутах после отмены
    expect(screen.getByTestId('ProfileCard.InputFirstname')).toHaveValue('admin123');
    expect(screen.getByTestId('ProfileCard.InputLastname')).toHaveValue('admin123');
  });

  test('Should show error', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

    // Очищаем инпут
    await userEvent.clear(screen.getByTestId('ProfileCard.InputFirstname'));

    // Попало ли измененое значение в инпут
    expect(screen.getByTestId('ProfileCard.InputFirstname')).toHaveValue('');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));

    // Появилась ли ошибка
    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  });

  test('When profileFormData is valid, send http put request', async () => {
    const mockPutReq = jest.spyOn($api, 'put');
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

    // Очищаем инпуты
    await userEvent.clear(screen.getByTestId('ProfileCard.InputFirstname'));

    // Передаем новое значение в инпуты
    await userEvent.type(screen.getByTestId('ProfileCard.InputFirstname'), 'user');

    // Попало ли измененое значение в инпут
    expect(screen.getByTestId('ProfileCard.InputFirstname')).toHaveValue('user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));

    // Отправился ли запрос
    expect(mockPutReq).toHaveBeenCalled();
  });
});
