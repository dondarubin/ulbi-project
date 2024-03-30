import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwither';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ArrowIconRight } from 'shared/assets/icons/ArrowIcons/ArrowIconRight/ArrowIconRight';
import { ArrowIconLeft } from 'shared/assets/icons/ArrowIcons/ArrowIconLeft/ArrowIconLeft';
import { LineIcon } from 'shared/assets/icons/ArrowIcons/LineIcon/LineIcon';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { SidebarItem } from 'widgets/Sidebar/ui/components/SidebarItem';
import styles from './Sidebar.module.scss';
import { SidebarItemsList } from './model/constants';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [hovered, setHovered] = useState(false);

  const onClickToggleCollapseHandler = () => {
    setCollapsed((prev) => !prev);
    setHovered((prev) => !prev);
  };

  const onHoverToggleHoverHandler = () => {
    setHovered((prev) => !prev);
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
        onMouseEnter={onHoverToggleHoverHandler}
        onMouseLeave={onHoverToggleHoverHandler}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.XL}
        square
      >
        {
          collapsed ? (
            <ArrowIconRight color="var(--inverted-primary-color)" />
          ) : hovered ? (
            <ArrowIconLeft color="var(--inverted-primary-color)" />
          ) : (
            <LineIcon color="var(--inverted-primary-color)" />
          )
        }
      </Button>

      <div className={styles.items}>
        {SidebarItemsList.map((item) => (
          <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
          />
        ))}
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
});
