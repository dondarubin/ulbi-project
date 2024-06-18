import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import { VStack } from 'shared/ui/Stack';
import { Card } from 'shared/ui/Card';
import { useAppDispatch, useEffectInitial } from 'shared/lib/hooks';
import { getAiHistory } from '../../model/services/getAiHistory/getAiHistory';
import styles from './AiHelperResponseList.module.scss';
import { getAiHelperQuestionData, getAiHelperQuestionIsLoading } from '../../model/selectors/AskAiHelperFormSelectors';

interface AiHelperResponseListProps {
  className?: string;
}

export const AiHelperResponseList = memo((props: AiHelperResponseListProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation('helper');
  const dispatch = useAppDispatch();
  const responseData = useSelector(getAiHelperQuestionData);
  const isLoading = useSelector(getAiHelperQuestionIsLoading);

  useEffectInitial(() => {
    dispatch(getAiHistory());
  }, []);

  if (isLoading) {
    return (
      <VStack gap="16" max className={classNames(styles.AiHelperResponseList, {}, [className])}>
        <Skeleton width="80%" height={200} border="12" />
      </VStack>
    );
  }

  if (!responseData?.length) {
    return (
      <VStack gap="16" max className={classNames(styles.AiHelperResponseList, {}, [className])}>
        <Text text={t('Ответов пока нет, спросите что то!')} />
      </VStack>
    );
  }

  return (
    <VStack gap="16" max className={classNames(styles.AiHelperResponseList, {}, [className])}>
      {responseData?.map((item) => (
        <Card>
          {item.content.replace(/^["']|["']$/g, '')}
        </Card>
      ))}
    </VStack>
  );
});
