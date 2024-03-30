import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import styles from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/constants';

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <AppLink
      className={classNames(styles.item, { [styles.collapsed]: collapsed }, [])}
      theme={AppLinkTheme.PRIMARY_INVERTED}
      to={item.path}
    >
      <item.Icon color="var(--inverted-primary-color)" />
      <span className={styles.link}>
        {t(item.text)}
      </span>
    </AppLink>
  );
});
