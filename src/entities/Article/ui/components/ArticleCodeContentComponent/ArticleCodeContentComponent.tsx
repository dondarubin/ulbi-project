import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './ArticleCodeContentComponent.module.scss';

interface ArticleCodeContentComponentProps {
  className?: string;
}

export const ArticleCodeContentComponent = ({ className }: ArticleCodeContentComponentProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.ArticleCodeContentComponent, {}, [className])}>
      ArticleCodeContentComponent
    </div>
  );
};
