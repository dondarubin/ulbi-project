import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { updateProfileData } from '../../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../../model/slice/profileSlice';
import { getProfileReadonly } from '../../../model/selectors/getProfileReadonly/getProfileReadonly';
import styles from './EditableProfileCardHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = ({ className }: ProfilePageHeaderProps) => {
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
