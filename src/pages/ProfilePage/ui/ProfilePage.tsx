import { EditableProfileCard } from 'features/EditableProfileCard';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');

  return (
    <div className={classNames('', {}, [className])}>
      <EditableProfileCard />
    </div>
  );
});

export default ProfilePage;
