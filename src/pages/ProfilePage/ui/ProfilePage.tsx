import { EditableProfileCard } from 'features/EditableProfileCard';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className={classNames('', {}, [className])}>
      <EditableProfileCard id={id} />
    </div>
  );
});

export default ProfilePage;
