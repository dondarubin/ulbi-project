import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Input } from '@/shared/ui/Input';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { ReducersList, useAppDispatch, useDynamicModuleLoader } from '@/shared/lib/hooks';
import { Text } from '@/shared/ui/Text';
import { ArticleContent, ArticleContentType } from '@/entities/Article';
import { getRandomNumber } from '@/shared/lib/getRandomNumber/getRandomNumber';
import { AddArticleContent } from './components/AddArticleContent/AddArticleContent';
import {
  getCreateArticleFormContent,
  getCreateArticleFormImg,
  getCreateArticleFormIsLoading,
  getCreateArticleFormSubtitle,
  getCreateArticleFormTitle,
  getCreateArticleFormType,
  getCreateArticleFormValidateError,
} from '../model/selectors/createArticleFormSelectors';
import styles from './CreateArticleForm.module.scss';
import { createArticleFormActions, createArticleFormReducer } from '../model/slice/createArticleFormSlice';
// eslint-disable-next-line origin-fsd-plugin/imports-from-public-api
import { ArticleCode } from '@/entities/Article/ui/ArticleDetails/components/ArticleCode/ArticleCode';
// eslint-disable-next-line origin-fsd-plugin/imports-from-public-api
import { ArticleText } from '@/entities/Article/ui/ArticleDetails/components/ArticleText/ArticleText';
// eslint-disable-next-line origin-fsd-plugin/imports-from-public-api
import { ArticleImage } from '@/entities/Article/ui/ArticleDetails/components/ArticleImage/ArticleImage';

interface CreateArticleFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  createArticleForm: createArticleFormReducer,
};

export const CreateArticleForm = memo((props: CreateArticleFormProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const title = useSelector(getCreateArticleFormTitle);
  const subtitle = useSelector(getCreateArticleFormSubtitle);
  const img = useSelector(getCreateArticleFormImg);
  const type = useSelector(getCreateArticleFormType);
  const content = useSelector(getCreateArticleFormContent);
  const isLoading = useSelector(getCreateArticleFormIsLoading);
  const validateError = useSelector(getCreateArticleFormValidateError);
  useDynamicModuleLoader({ reducers: initialReducers });

  const onChangeTitle = useCallback((value?: string) => {
    // dispatch(createArticleFormActions.setArticleData({ title: value || '' }));
    dispatch(createArticleFormActions.setTitle(value || ''));
  }, [dispatch]);

  const onChangeSubtitle = useCallback((value?: string) => {
    // dispatch(createArticleFormActions.setArticleData({ subtitle: value || '' }));
    dispatch(createArticleFormActions.setSubtitle(value || ''));
  }, [dispatch]);

  const renderAddedContent = (currentContent: ArticleContent) => {
    switch (currentContent.type) {
    case ArticleContentType.CODE:
      return (
        <ArticleCode
          key={`${currentContent.code} + ${getRandomNumber()}`}
          content={currentContent}
        />
      );
    case ArticleContentType.TEXT:
      return (
        <ArticleText
          key={`${currentContent.title} + ${getRandomNumber()}`}
          content={currentContent}
        />
      );
    case ArticleContentType.IMAGE:
      return (
        <ArticleImage
          key={`${currentContent.imageUrl} + ${getRandomNumber()}`}
          content={currentContent}
        />
      );
    default:
      return null;
    }
  };

  return (
    <VStack max gap="32" className={classNames(styles.CreateArticleForm, {}, [className])}>
      <Text title={t('Форма создания статьи')} />
      <Input
        value={title}
        onChange={onChangeTitle}
        placeholder={t('Название статьи')}
      />
      <Input
        value={subtitle}
        onChange={onChangeSubtitle}
        placeholder={t('Подзаголовок статьи')}
      />
      <Input
        type="file"
        alt=""
        placeholder={t('Добавьте заглавное изображение')}
      />

      {content?.map((currentContent) => (
        <>
          {renderAddedContent(currentContent)}
        </>
      ))}

      <AddArticleContent />

      {/* <ArticleTypeTabs */}
      {/*  className={styles.tabs} */}
      {/*  onChangeType={onChangeTabHandler} */}
      {/* /> */}

      {/* <HStack max gap="16" justify="around"> */}
      {/*  <Input */}
      {/*    value={title} */}
      {/*    onChange={onChangeTitle} */}
      {/*    placeholder={t('Блок с текстом')} */}
      {/*  /> */}
      {/*  <Input */}
      {/*    value={title} */}
      {/*    onChange={onChangeTitle} */}
      {/*    placeholder={t('Параграф')} */}
      {/*  /> */}
      {/*  <Input */}
      {/*    value={title} */}
      {/*    onChange={onChangeTitle} */}
      {/*    placeholder={t('Параграф')} */}
      {/*  /> */}
      {/* </HStack> */}

      {/* <Input */}
      {/*  value={title} */}
      {/*  onChange={onChangeTitle} */}
      {/*  placeholder={t('Блок с кодом')} */}
      {/* /> */}

      {/* <HStack max gap="16" justify="around"> */}
      {/*  <Input */}
      {/*    value={title} */}
      {/*    onChange={onChangeTitle} */}
      {/*    placeholder={t('Блок с изображением')} */}
      {/*  /> */}
      {/*  <Input */}
      {/*    type="file" */}
      {/*    alt="" */}
      {/*  /> */}
      {/* </HStack> */}

    </VStack>
  );
});
