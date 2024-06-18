import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { PageWrapper } from 'widgets/PageWrapper';
import { CreateArticleForm } from 'features/CreateArticleForm';
import styles from './ArticleCreatePage.module.scss';

interface ArticleCreatePageProps {
  className?: string;
}

const ArticleCreatePage = memo((props: ArticleCreatePageProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation();

  return (
    <PageWrapper className={classNames(styles.ArticleCreatePage, {}, [className])}>
      <CreateArticleForm />
    </PageWrapper>
  );
});

export default ArticleCreatePage;
