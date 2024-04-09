import { useSelector } from 'react-redux';
import { ReducersList, useAppDispatch, useDynamicModuleLoader } from 'shared/lib/hooks';
import { useCallback, useEffect } from 'react';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProfileCard } from 'entities/Profile';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileFormData } from '../model/selectors/getProfileFormData/getProfileFormData';
import { profileActions, profileReducer } from '../model/slice/profileSlice';
import { EditableProfileCardHeader } from './components/EditableProfileCardHeader/EditableProfileCardHeader';
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData';

interface EditableProfileCardProps {
  className?: string;
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = ({ className }: EditableProfileCardProps) => {
  const profileFormData = useSelector(getProfileFormData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();
  useDynamicModuleLoader({ reducers: initialReducers });

  useEffect(() => {
    dispatch(fetchProfileData('1'));
  }, [dispatch]);

  const onChangeFirstnameHandler = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ firstname: value || '' }));
  }, [dispatch]);

  const onChangeLastnameHandler = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch]);

  const onChangeAgeHandler = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
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
    console.log(country);
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  return (
    <div className={classNames('', {}, [className])}>
      <EditableProfileCardHeader />
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
    </div>
  );
};
