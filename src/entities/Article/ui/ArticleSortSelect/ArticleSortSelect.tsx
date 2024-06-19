import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOptions } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/constants/sort';
import styles from './ArticleSortSelect.module.scss';
import { ArticleSortField } from '../../model/constants/articleConstants';

interface ArticleSortSelectProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelect = memo((props: ArticleSortSelectProps) => {
  const {
    className,
    onChangeSort,
    sort,
    order,
    onChangeOrder,
  } = props;
  const { t } = useTranslation('articles');

  const sortOptions = useMemo<SelectOptions<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('дате создания'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('названию'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('просмотрам'),
    },
  ], [t]);

  const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => [
    {
      value: SortOrder.ASC,
      content: t('возрастанию'),
    },
    {
      value: SortOrder.DESC,
      content: t('убыванию'),
    },
  ], [t]);

  return (
    <div className={classNames(styles.ArticleSortSelect, {}, [className])}>
      <Select /* <ArticleSortField> можно явно указать дженерик */
        value={sort}
        label={t('Сортировать по')}
        options={sortOptions}
        onChange={onChangeSort}
      />
      <Select
        value={order}
        label={t('по')}
        options={orderOptions}
        onChange={onChangeOrder}
      />
    </div>
  );
});
