import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwither';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { LineIcon } from '@/shared/assets/icons/ArrowIcons/LineIcon/LineIcon';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { useHover } from '@/shared/lib/hooks';
import { ArrowIconLeft } from '@/shared/assets/icons/ArrowIcons/ArrowIconLeft/ArrowIconLeft';
import { ArrowIconRight } from '@/shared/assets/icons/ArrowIcons/ArrowIconRight/ArrowIconRight';
import styles from './Sidebar.module.scss';
import { getSidebarItems } from './model/selectors/getSidebarItemsSelectors';
import { SidebarItem } from './components/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isHover, bindHover] = useHover();
  const sidebarItemsList = useSelector(getSidebarItems);

  const onClickToggleCollapseHandler = () => {
    setCollapsed((prev) => !prev);
  };

  const sidebarItemsListMemo = useMemo(() => sidebarItemsList.map((item) => (
    <SidebarItem
      item={item}
      collapsed={collapsed}
      key={item.path}
    />
  )), [collapsed, sidebarItemsList]);

  return (
    <section
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
        {...bindHover}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.XL}
        square
      >
        {
          collapsed ? (
            <ArrowIconRight color="var(--inverted-primary-color)" />
          ) : isHover ? (
            <ArrowIconLeft color="var(--inverted-primary-color)" />
          ) : (
            <LineIcon color="var(--inverted-primary-color)" />
          )
        }
      </Button>

      <VStack
        // role="navigation"
        className={styles.items}
      >
        {sidebarItemsListMemo}
      </VStack>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          className={styles.lang}
          short={collapsed}
        />
      </div>
    </section>
  );
});
