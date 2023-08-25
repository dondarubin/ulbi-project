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
import { MainIconDesktop } from 'shared/assets/icons/MainIcon/MainIconDesktop';
import { AboutIcon } from 'shared/assets/icons/AboutIcon/AboutIcon';
import { UserProfileIcon } from 'shared/assets/icons/UserProfile/UserProfileIcon';
import { ArticlesIcon } from 'shared/assets/icons/ArticlesIcon/ArticlesIcon';
import { ArrowIconRight } from 'shared/assets/icons/ArrowIcons/ArrowIconRight/ArrowIconRight';
import { ArrowIconLeft } from 'shared/assets/icons/ArrowIcons/ArrowIconLeft/ArrowIconLeft';
import { useDeviceType } from 'shared/lib/hooks/useDeviceType/useDeviceType';
import { MainIconTablet } from 'shared/assets/icons/MainIcon/MainIconTablet';
import { MainIconMobile } from 'shared/assets/icons/MainIcon/MainIconMobile';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const deviceType = useDeviceType();

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
        {
          collapsed
            ? <ArrowIconRight color="var(--inverted-primary-color)" />
            : <ArrowIconLeft color="var(--inverted-primary-color)" />
        }
      </Button>

      <div className={styles.items}>
        <AppLink
          className={styles.item}
          theme={AppLinkTheme.PRIMARY_INVERTED}
          to={RoutePath.main}
        >
          {
            deviceType === 'desktop'
              ? <MainIconDesktop color="var(--inverted-primary-color)" />
              : deviceType === 'tablet'
                ? <MainIconTablet color="var(--inverted-primary-color)" />
                : <MainIconMobile color="var(--inverted-primary-color)" />
          }
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

        <AppLink
          className={styles.item}
          theme={AppLinkTheme.PRIMARY_INVERTED}
          to=""
        >
          <UserProfileIcon color="var(--inverted-primary-color)" />
          <span className={styles.link}>
            {t('Профиль')}
          </span>
        </AppLink>

        <AppLink
          className={styles.item}
          theme={AppLinkTheme.PRIMARY_INVERTED}
          to=""
        >
          <ArticlesIcon color="var(--inverted-primary-color)" />
          <span className={styles.link}>
            {t('Статьи')}
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
