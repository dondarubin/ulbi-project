import { memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { ListIcon } from '@/shared/assets/icons/ListIcon/ListIcon';
import { TileIcon } from '@/shared/assets/icons/TileIcon/TileIcon';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import styles from './ArticleViewSelect.module.scss';
import { ArticleView } from '../../model/constants/articleConstants';

interface ArticleViewSelectProps {
  className?: string;
  view: ArticleView;
  onChangeView?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.TILE,
    Icon: () => <TileIcon color="var(--primary-color)" />,
  },
  {
    view: ArticleView.LIST,
    Icon: () => <ListIcon color="var(--primary-color)" />,
  },
];

export const ArticleViewSelect = memo((props: ArticleViewSelectProps) => {
  const {
    className,
    view,
    onChangeView,
  } = props;

  const onClickViewHandler = (newView: ArticleView) => (/* event */) => {
    onChangeView?.(newView);
  };

  return (
    <div className={classNames(styles.ArticleViewSelect, {}, [className])}>
      {viewTypes.map((viewItem) => (
        <Button
          key={viewItem.view}
          className={classNames(styles.button, { [styles.selected]: viewItem.view === view }, [])}
          theme={ButtonTheme.CLEAR}
          onClick={onClickViewHandler(viewItem.view)}
        >
          {viewItem.Icon()}
        </Button>
      ))}
    </div>
  );
});
