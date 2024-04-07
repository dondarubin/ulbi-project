import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

  const onEditProfileHandler = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEditProfileHandler = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSaveProfileHandler = useCallback(() => {
    dispatch(updateProfileData('1'));
  }, [dispatch]);

  return (
    <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />

      {readonly ? (
        <Button
          className={styles.ProfilePageHeader_edit}
          theme={ButtonTheme.OUTLINE}
          onClick={onEditProfileHandler}
        >
          {t('Редактировать')}
        </Button>
      ) : (
        <>
          <Button
            className={styles.ProfilePageHeader_cancel}
            theme={ButtonTheme.OUTLINE_RED}
            onClick={onCancelEditProfileHandler}
          >
            {t('Отменить')}
          </Button>

          <Button
            className={styles.ProfilePageHeader_save}
            theme={ButtonTheme.OUTLINE}
            onClick={onSaveProfileHandler}
          >
            {t('Сохранить')}
          </Button>
        </>
      )}
    </div>
  );
};
