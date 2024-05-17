import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper';

const AdminPanelPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <PageWrapper>
      {t('Админ панель')}
    </PageWrapper>
  );
});

export default AdminPanelPage;
