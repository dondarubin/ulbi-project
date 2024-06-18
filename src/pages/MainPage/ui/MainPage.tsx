import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper';
import { VStack } from 'shared/ui/Stack';
import { Text, TextAlign, TextSize } from 'shared/ui/Text';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <PageWrapper>
      <VStack
        align="center"
        max
        gap="32"
      >
        <Text
          size={TextSize.L}
          align={TextAlign.CENTER}
          title={t('Tech Pulse')}
          text={t('Платформа, где вы ОБЯЗАТЕЛЬНО найдёте что-то новое!')}
        />
      </VStack>
    </PageWrapper>
  );
});

export default MainPage;
