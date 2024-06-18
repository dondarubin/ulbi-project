import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper';
import { Text } from 'shared/ui/Text';
import { HStack, VStack } from 'shared/ui/Stack';
import { ReactIcon } from 'shared/assets/icons/ReactIcon/ReactIcon';
import { ReduxIcon } from 'shared/assets/icons/ReduxIcon/ReduxIcon';
import { TypescriptIcon } from 'shared/assets/icons/TypescriptIcon/TypescriptIcon';
import { NodeIcon } from 'shared/assets/icons/NodeIcon/NodeIcon';
import { ExpressIcon } from 'shared/assets/icons/ExpressIcon/ExpressIcon';
import { PostgresIcon } from 'shared/assets/icons/PostgresIcon/PostgresIcon';

const AboutPage = memo(() => {
  const { t } = useTranslation('about');

  return (
    <PageWrapper>
      <VStack
        max
        align="start"
        gap="8"
      >
        <Text
          title={t('Стек разработки')}
        />

        <HStack
          gap="16"
        >
          <Text
            text={t('Клиентская часть')}
          />
          <ReactIcon />
          <ReduxIcon />
          <TypescriptIcon />
        </HStack>

        <HStack
          gap="16"
        >
          <Text
            text={t('Серверная часть')}
          />
          <NodeIcon />
          <ExpressIcon color="var(--primary-color)" />
          <PostgresIcon />
        </HStack>
      </VStack>
    </PageWrapper>
  );
});

export default AboutPage;
