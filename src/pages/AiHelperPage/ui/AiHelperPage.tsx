import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PageWrapper } from '@/widgets/PageWrapper';
import { AiHelperResponseList, askAiHelper, AskAiHelperForm } from '@/entities/AiHelper';
import { useAppDispatch } from '@/shared/lib/hooks';
import { VStack } from '@/shared/ui/Stack';
import styles from './AiHelperPage.module.scss';

interface AIHelperPageProps {
  className?: string;
}

const AiHelperPage = memo((props: AIHelperPageProps) => {
  const {
    className,
  } = props;
  const dispatch = useAppDispatch();

  const onSuccessAskQuestionHandler = useCallback((value: string) => {
    dispatch(askAiHelper());
  }, [dispatch]);

  return (
    <PageWrapper className={classNames(styles.AIHelperPage, {}, [className])}>
      <VStack max gap="8">
        <AskAiHelperForm onSuccess={onSuccessAskQuestionHandler} />
        <AiHelperResponseList />
      </VStack>
    </PageWrapper>
  );
});

export default AiHelperPage;
