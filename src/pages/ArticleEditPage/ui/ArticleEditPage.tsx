import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { PageWrapper } from 'widgets/PageWrapper';
import styles from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation();

  return (
    <PageWrapper className={classNames(styles.ArticleEditPage, {}, [className])}>
      ArticleEditPage
    </PageWrapper>
  );
});

export default ArticleEditPage;
