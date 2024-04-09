import { EditableProfileCard } from 'features/EditableProfileCard';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => (
  <div className={classNames('', {}, [className])}>
    <EditableProfileCard />
  </div>
));

export default ProfilePage;
