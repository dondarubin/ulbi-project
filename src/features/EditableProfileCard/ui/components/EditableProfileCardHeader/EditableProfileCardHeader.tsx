import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';
import { updateProfileData } from '../../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../../model/slice/profileSlice';
import { getProfileReadonly } from '../../../model/selectors/getProfileReadonly/getProfileReadonly';

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
            data-testid="EditableProfileCardHeader.EditBtn"
          >
            {t('Редактировать')}
          </Button>
        ) : (
          <HStack gap="8">
            <Button
              theme={ButtonTheme.OUTLINE_RED}
              onClick={onCancelEditProfileHandler}
              data-testid="EditableProfileCardHeader.CancelBtn"
            >
              {t('Отменить')}
            </Button>

            <Button
              theme={ButtonTheme.OUTLINE}
              onClick={onSaveProfileHandler}
              data-testid="EditableProfileCardHeader.SaveBtn"
            >
              {t('Сохранить')}
            </Button>
          </HStack>
        )
      )}
    </HStack>
  );
};
