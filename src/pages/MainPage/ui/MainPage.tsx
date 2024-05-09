import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { PageWrapper } from 'widgets/PageWrapper';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <PageWrapper>
      <BugButton />
      {t('Главная страница')}
    </PageWrapper>
  );
});

export default MainPage;
