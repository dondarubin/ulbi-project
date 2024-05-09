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
import { getRandomNumber } from 'shared/lib/getRandomNumber/getRandomNumber';
import { HStack, VStack } from 'shared/ui/Stack';
import styles from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetailsSelectors';
import { ArticleContent } from '../../model/types/article.types';
import { ArticleText } from './components/ArticleText/ArticleText';
import { ArticleImage } from './components/ArticleImage/ArticleImage';
import { ArticleCode } from './components/ArticleCode/ArticleCode';
import { ArticleContentType } from '../../model/constants/articleConstants';

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
          key={`${content.title} + ${getRandomNumber()}`}
          content={content}
        />
      );
    case ArticleContentType.IMAGE:
      return (
        <ArticleImage
          key={`${content.imageUrl} + ${getRandomNumber()}`}
          content={content}
        />
      );
    case ArticleContentType.CODE:
      return (
        <ArticleCode
          key={`${content.code} + ${getRandomNumber()}`}
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
        <Skeleton className={styles.ArticleDetails_avatar} width={200} height={200} border="50%" />
        <Skeleton width={300} height={32} />
        <Skeleton width={600} height={24} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
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
        <HStack
          justify="center"
          max
        >
          <Avatar
            className={styles.ArticleDetails_avatar}
            size={200}
            src={articleDetailsData?.img}
          />
        </HStack>
        <VStack gap="4" max>
          <Text
            title={articleDetailsData?.title}
            text={articleDetailsData?.subtitle}
            size={TextSize.L}
          />
          <HStack gap="8">
            <EyeIcon color="var(--primary-color)" />
            <Text text={String(articleDetailsData?.views)} />
          </HStack>
          <HStack gap="8">
            <CalendarIcon color="var(--primary-color)" />
            <Text text={articleDetailsData?.created_at} />
          </HStack>
        </VStack>
        {articleDetailsData?.content?.map(renderContent)}
      </>
    );
  }

  return (
    <VStack gap="16" className={classNames(styles.ArticleDetails, {}, [className])}>
      {content}
    </VStack>
  );
});
