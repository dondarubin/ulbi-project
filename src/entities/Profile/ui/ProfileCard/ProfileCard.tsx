import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import styles from './ProfileCard.module.scss';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const profileData = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.ProfileCard_header}>
        <Text title={t('Профиль')} />

        <Button
          className={styles.ProfileCard_header_edit}
          theme={ButtonTheme.OUTLINE}
        >
          {t('Редактировать')}
        </Button>
      </div>

      <div className={styles.ProfileCard_data}>
        <Input
          value={profileData?.firstname}
          placeholder={t('Ваше имя')}
          className={styles.ProfileCard_data_input}
        />

        <Input
          value={profileData?.lastname}
          placeholder={t('Ваша фамилия')}
          className={styles.ProfileCard_data_input}
        />
      </div>
    </div>
  );
};
