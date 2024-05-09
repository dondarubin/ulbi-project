import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';
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
    <HStack justify="between" max>
      <Text title={t('Профиль')} />
      {canEditProfile && (
        readonly ? (
          <Button
            theme={ButtonTheme.OUTLINE}
            onClick={onEditProfileHandler}
          >
            {t('Редактировать')}
          </Button>
        ) : (
          <HStack gap="8">
            <Button
              theme={ButtonTheme.OUTLINE_RED}
              onClick={onCancelEditProfileHandler}
            >
              {t('Отменить')}
            </Button>

            <Button
              theme={ButtonTheme.OUTLINE}
              onClick={onSaveProfileHandler}
            >
              {t('Сохранить')}
            </Button>
          </HStack>
        )
      )}
    </HStack>
  );
};
