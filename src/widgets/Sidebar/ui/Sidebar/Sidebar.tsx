import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwither';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button.types';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink.types';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { MainIcon } from 'shared/assets/icons/MainIcon/MainIcon';
import { AboutIcon } from 'shared/assets/icons/AboutIcon/AboutIcon';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onClickToggleCollapseHandler = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        styles.Sidebar,
        { [styles.collapsed]: collapsed },
        [className],
      )}
    >
      <Button
        className={styles.collapseButton}
        data-testid="sidebar-toggle"
        onClick={onClickToggleCollapseHandler}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.XL}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={styles.items}>
        <AppLink
          className={styles.item}
          theme={AppLinkTheme.PRIMARY_INVERTED}
          to={RoutePath.main}
        >
          <MainIcon color="var(--inverted-primary-color)" />
          <span className={styles.link}>
            {t('Главная')}
          </span>
        </AppLink>

        <AppLink
          className={styles.item}
          theme={AppLinkTheme.PRIMARY_INVERTED}
          to={RoutePath.about}
        >
          <AboutIcon color="var(--inverted-primary-color)" />
          <span className={styles.link}>
            {t('О сайте')}
          </span>
        </AppLink>
      </div>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          className={styles.lang}
          short={collapsed}
        />
      </div>
    </div>
  );
};
