import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './ArticleImageContentComponent.module.scss';

interface ArticleImageContentComponentProps {
  className?: string;
}

export const ArticleImageContentComponent = ({ className }: ArticleImageContentComponentProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.ArticleImageContentComponent, {}, [className])}>
      ArticleImageContentComponent
    </div>
  );
};
