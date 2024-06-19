import { ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Tabs.module.scss';
import { Card, CardTheme } from '../Card';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  selectedTab: T;
  onTabClick: (tab: TabItem<T>) => void;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const {
    className,
    tabs,
    selectedTab,
    onTabClick,
  } = props;

  const onClickSelectTabHandler = useCallback((tab: TabItem<T>) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
    <div className={classNames(styles.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={styles.tab}
          theme={tab.value === selectedTab ? CardTheme.DEFAULT : CardTheme.OUTLINE}
          onClick={onClickSelectTabHandler(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
