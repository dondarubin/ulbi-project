import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import styles from './RatingCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useDevice } from '@/shared/lib/hooks';
import { Drawer } from '@/shared/ui/Drawer';
import { DrawerContent } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?:(starCount: number) => void;
  onAccept?:(starCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    hasFeedback,
    onCancel,
    feedbackTitle,
    onAccept,
    title,
  } = props;
  const { t } = useTranslation('articles');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  const isMobile = useDevice();

  const onSelectStars = useCallback((starCount: number) => {
    setStarsCount(starCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(starCount);
    }
  }, [hasFeedback, onAccept]);

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedbackText);
  }, [feedbackText, onAccept, starsCount]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <VStack max gap="32">
      <Text text={feedbackTitle} />
      <Input
        value={feedbackText}
        onChange={setFeedbackText}
        placeholder={t('Ваш отзыв')}
      />

      <HStack max gap="16" justify="end">
        <Button
          theme={ButtonTheme.OUTLINE_RED}
          onClick={cancelHandler}
        >
          {t('Закрыть')}
        </Button>
        <Button
          onClick={acceptHandler}
        >
          {t('Отправить')}
        </Button>
      </HStack>
    </VStack>
  );

  return (
    <Card className={classNames(styles.RatingCard, {}, [className])}>
      <VStack align="center" gap="8">
        <Text title={title} />
        <StarRating
          size={40}
          onSelect={onSelectStars}
        />
      </VStack>

      {isMobile ? (
        <Drawer
          lazy
          isOpen={isModalOpen}
          onClose={cancelHandler}
        >
          {modalContent}
        </Drawer>
      ) : (
        <Modal
          isOpen={isModalOpen}
          onClose={cancelHandler}
          lazy
        >
          {modalContent}
        </Modal>
      )}
    </Card>
  );
});
