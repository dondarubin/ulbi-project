import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '../../model/constants/articleConstants';

interface ArticleTypeTabsProps {
  className?: string;
  selectedType: ArticleType;
  onChangeType: (articleType: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const {
    className,
    selectedType,
    onChangeType,
  } = props;
  const { t } = useTranslation('articles');

  const articleTypesTabs = useMemo(() => Object.values(ArticleType).reduce((acc: TabItem<ArticleType>[], cur) => ([
    ...acc,
    { value: cur, content: t(cur, { ns: 'articles' }) },
  ]), []), [t]);

  const onClickTabHandler = useCallback((tab: TabItem<ArticleType>) => {
    onChangeType(tab.value);
  }, [onChangeType]);

  return (
    <Tabs
      className={classNames('', {}, [className])}
      tabs={articleTypesTabs}
      selectedTab={selectedType}
      onTabClick={onClickTabHandler}
    />
  );
});
