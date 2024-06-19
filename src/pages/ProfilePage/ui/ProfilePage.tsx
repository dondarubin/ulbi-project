import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PageWrapper } from '@/widgets/PageWrapper';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();

  return (
    <PageWrapper className={classNames('', {}, [className])}>
      <EditableProfileCard id={id} />
    </PageWrapper>
  );
});

export default ProfilePage;
