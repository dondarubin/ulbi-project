import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import styles from './AddArticleType.module.scss';

interface AddArticleTypeProps {
  className?: string;
}

export const AddArticleType = memo((props: AddArticleTypeProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.AddArticleType, {}, [className])}>

    </div>
  );
});
