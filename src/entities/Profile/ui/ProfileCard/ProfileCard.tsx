import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import { Avatar } from 'shared/ui/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text';
import { Country, CountrySelect } from 'entities/Country';
import styles from './ProfileCard.module.scss';
import { IProfile } from '../../model/types/profile.types';

interface ProfileCardProps {
  className?: string,
  profileFormData?: IProfile,
  isLoading?: boolean,
  error?: string
  readonly?: boolean
  onChangeFirstname?: (value?: string) => void,
  onChangeLastname?: (value?: string) => void,
  onChangeAge?: (value?: string) => void,
  onChangeCity?: (value?: string) => void,
  onChangeUsername?: (value?: string) => void,
  onChangeAvatar?: (value?: string) => void,
  onChangeCurrency?: (currency: Currency) => void,
  onChangeCountry?: (country: Country) => void,
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    profileFormData,
    error,
    isLoading,
    readonly,
    onChangeLastname,
    onChangeFirstname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(styles.ProfileCard, {}, [className, styles.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(styles.ProfileCard, {}, [className, styles.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [styles.editMode]: !readonly,
  };

  return (
    <div className={classNames(styles.ProfileCard, mods, [className])}>
      {profileFormData?.avatar && (
        <div className={styles.ProfileCard_avatarWrapper}>
          <Avatar
            src={profileFormData.avatar}
            alt=""
          />
        </div>
      )}

      <Input
        className={styles.ProfileCard_input}
        value={profileFormData?.firstname}
        onChange={onChangeFirstname}
        placeholder={t('Имя')}
        readonly={readonly}
      />

      <Input
        className={styles.ProfileCard_input}
        value={profileFormData?.lastname}
        onChange={onChangeLastname}
        placeholder={t('Фамилия')}
        readonly={readonly}
      />

      <Input
        className={styles.ProfileCard_input}
        type="number"
        value={profileFormData?.age}
        onChange={onChangeAge}
        placeholder={t('Возраст')}
        readonly={readonly}
      />

      <Input
        className={styles.ProfileCard_input}
        value={profileFormData?.city}
        onChange={onChangeCity}
        placeholder={t('Город')}
        readonly={readonly}
      />

      <Input
        className={styles.ProfileCard_input}
        value={profileFormData?.username}
        onChange={onChangeUsername}
        placeholder={t('Имя пользователя')}
        readonly={readonly}
      />

      <Input
        className={styles.ProfileCard_input}
        value={profileFormData?.avatar}
        onChange={onChangeAvatar}
        placeholder={t('Ссылка на аватар')}
        readonly={readonly}
      />

      <CurrencySelect
        className={styles.ProfileCard_input}
        value={profileFormData?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />

      <CountrySelect
        className={styles.ProfileCard_input}
        value={profileFormData?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />

    </div>
  );
};
