import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks';
import { profileReducer } from 'entities/Profile';

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  useDynamicModuleLoader({ reducers: initialReducers });

  return (
    <div className={classNames('', {}, [className])}>
      {t('Profile page')}
    </div>
  );
});

export default ProfilePage;
