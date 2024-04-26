import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './ArticleTextContentComponent.module.scss';

interface ArticleTextContentComponentProps {
  className?: string;
}

export const ArticleTextContentComponent = ({ className }: ArticleTextContentComponentProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.ArticleTextContentComponent, {}, [className])}>
      ArticleTextContentComponent
    </div>
  );
};
