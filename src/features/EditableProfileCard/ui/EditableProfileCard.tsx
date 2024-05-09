import { useSelector } from 'react-redux';
import {
  ReducersList, useAppDispatch, useDynamicModuleLoader, useEffectInitial,
} from 'shared/lib/hooks';
import { useCallback } from 'react';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { ProfileCard } from 'entities/Profile';
import { VStack } from 'shared/ui/Stack';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileFormData } from '../model/selectors/getProfileFormData/getProfileFormData';
import { profileActions, profileReducer } from '../model/slice/profileSlice';
import { EditableProfileCardHeader } from './components/EditableProfileCardHeader/EditableProfileCardHeader';
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData';
import { getProfileValidateErrors } from '../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { ValidateProfileErrors } from '../model/types/ProflieSchema.types';

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = ({ className, id }: EditableProfileCardProps) => {
  const { t } = useTranslation('profile');
  const profileFormData = useSelector(getProfileFormData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const dispatch = useAppDispatch();
  useDynamicModuleLoader({ reducers: initialReducers });

  // TODO написать нормальные переводы
  const validateErrorsTranslates: Record<ValidateProfileErrors, string> = {
    [ValidateProfileErrors.SERVER_ERROR]: t('Серверная ошибка'),
    [ValidateProfileErrors.INCORRECT_USER_DATA]: t('Имя и фамилия должны быть указаны вместе.'),
    [ValidateProfileErrors.INCORRECT_USERNAME]: t('Имя пользоватеся обязательно и должно быть более 3 но менее 20 символов'),
    [ValidateProfileErrors.INCORRECT_AGE]: t('Возраст должен быть не менее 0 и не более 100'),
    [ValidateProfileErrors.INCORRECT_CITY]: t('Город должен быть не более 50'),
    [ValidateProfileErrors.INCORRECT_FIRSTNAME]: t('Имя должен быть не более 50'),
    [ValidateProfileErrors.NO_DATA]: t('Данные не указаны'),
  };

  useEffectInitial(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch]);

  const onChangeFirstnameHandler = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ firstname: value || '' }));
  }, [dispatch]);

  const onChangeLastnameHandler = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch]);

  const onChangeAgeHandler = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || '') }));
  }, [dispatch]);

  const onChangeCityHandler = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeUsernameHandler = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeAvatarHandler = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeCurrencyHandler = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);

  const onChangeCountryHandler = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  return (
    <VStack gap="16" max>
      <EditableProfileCardHeader id={id} />
      {validateErrors?.length && validateErrors.map((error) => (
        <Text
          key={error}
          theme={TextTheme.ERROR}
          text={validateErrorsTranslates[error]}
        />
      ))}
      <ProfileCard
        profileFormData={profileFormData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeFirstname={onChangeFirstnameHandler}
        onChangeLastname={onChangeLastnameHandler}
        onChangeAge={onChangeAgeHandler}
        onChangeCity={onChangeCityHandler}
        onChangeUsername={onChangeUsernameHandler}
        onChangeAvatar={onChangeAvatarHandler}
        onChangeCurrency={onChangeCurrencyHandler}
        onChangeCountry={onChangeCountryHandler}
      />
    </VStack>
  );
};
