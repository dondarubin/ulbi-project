import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { getUserAuthData } from 'entities/User';
import { updateProfileData } from '../../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../../model/slice/profileSlice';
import { getProfileReadonly } from '../../../model/selectors/getProfileReadonly/getProfileReadonly';
import styles from './EditableProfileCardHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
  id?: string;
}

export const EditableProfileCardHeader = ({ className, id }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const currentUserData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);
  const canEditProfile = currentUserData?.userId === Number(id);

  const onEditProfileHandler = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEditProfileHandler = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSaveProfileHandler = useCallback(() => {
    if (id) {
      dispatch(updateProfileData(id));
    }
  }, [dispatch, id]);

  return (
    <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {canEditProfile && (
        readonly ? (
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
        )
      )}
    </div>
  );
};
