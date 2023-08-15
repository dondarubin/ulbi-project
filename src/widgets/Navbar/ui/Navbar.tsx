import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink.types';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={classNames(styles.links, {}, [])}>

      </div>
    </div>
  );
};
