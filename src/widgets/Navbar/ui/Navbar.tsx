import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={classNames(styles.links, {}, [])}>
        <AppLink
          theme={AppLinkTheme.PRIMARY_INVERTED}
          to="/"
          className={styles.mainLink}
        >
          {t('Главная')}
        </AppLink>

        <AppLink theme={AppLinkTheme.PRIMARY_INVERTED} to="/about">
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};
