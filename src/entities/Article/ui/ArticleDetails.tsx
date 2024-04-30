import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
  ReducersList, useAppDispatch, useDynamicModuleLoader, useEffectInitial,
} from 'shared/lib/hooks';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import { Avatar } from 'shared/ui/Avatar';
import { EyeIcon } from 'shared/assets/icons/EyeIcon/EyeIcon';
import { CalendarIcon } from 'shared/assets/icons/CalendarIcon/CalendarIcon';
import styles from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../model/services/fetchArticleById/fetchArticleById';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../model/selectors/articleDetailsSelectors';
import { ArticleContent, ArticleContentType } from '../model/types/article.types';
import { ArticleText } from './components/ArticleText/ArticleText';
import { ArticleImage } from './components/ArticleImage/ArticleImage';
import { ArticleCode } from './components/ArticleCode/ArticleCode';

interface ArticleDetailsProps {
  className?: string;
  id: string
}

const initialReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const articleDetailsData = useSelector(getArticleDetailsData);
  useDynamicModuleLoader({ reducers: initialReducers });

  useEffectInitial(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  // TODO придумать уникальные ключи
  const renderContent = useCallback((content: ArticleContent) => {
    switch (content.type) {
    case ArticleContentType.TEXT:
      return (
        <ArticleText
          key={content.id}
          className={styles.ArticleDetails_content}
          content={content}
        />
      );
    case ArticleContentType.IMAGE:
      return (
        <ArticleImage
          key={content.id}
          className={styles.ArticleDetails_content}
          content={content}
        />
      );
    case ArticleContentType.CODE:
      return (
        <ArticleCode
          key={content.id}
          className={styles.ArticleDetails_content}
          content={content}
        />
      );
    default:
      return null;
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={styles.ArticleDetails_image} width={200} height={200} border="50%" />
        <Skeleton className={styles.ArticleDetails_title} width={300} height={32} />
        <Skeleton className={styles.ArticleDetails_skeleton} width={600} height={24} />
        <Skeleton className={styles.ArticleDetails_skeleton} width="100%" height={200} />
        <Skeleton className={styles.ArticleDetails_skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке статьи')}
      />
    );
  } else {
    content = (
      <>
        <div className={styles.ArticleDetails_imageWrapper}>
          <Avatar
            className={styles.ArticleDetails_image}
            size={200}
            src={articleDetailsData?.img}
          />
        </div>
        <Text
          className={styles.ArticleDetails_title}
          title={articleDetailsData?.title}
          text={articleDetailsData?.subtitle}
          size={TextSize.L}
        />
        <div className={styles.ArticleDetails_info}>
          <EyeIcon color="var(--primary-color)" />
          <Text text={String(articleDetailsData?.views)} />
        </div>
        <div className={styles.ArticleDetails_info}>
          <CalendarIcon color="var(--primary-color)" />
          <Text text={articleDetailsData?.created_at} />
        </div>
        {articleDetailsData?.content?.map(renderContent)}
      </>
    );
  }

  return (
    <div className={classNames(styles.ArticleDetails, {}, [className])}>
      {content}
    </div>
  );
});
