import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { TabItem, Tabs } from 'shared/ui/Tabs';
import { ArticleTypes } from '../../model/constants/articleConstants';

interface ArticleTypeTabsProps {
  className?: string;
  selectedType: ArticleTypes;
  onChangeType: (articleType: ArticleTypes) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const {
    className,
    selectedType,
    onChangeType,
  } = props;
  const { t } = useTranslation('articles');

  const articleTypesTabs = useMemo(() => Object.values(ArticleTypes).reduce((acc: TabItem<ArticleTypes>[], cur) => ([
    ...acc,
    { value: cur, content: t(cur, { ns: 'articles' }) },
  ]), []), [t]);

  const onClickTabHandler = useCallback((tab: TabItem<ArticleTypes>) => {
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
