import { useTranslation } from 'react-i18next';
import {
  memo, useCallback, useMemo, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks';
import { ArticleContentType } from '@/entities/Article/model/constants/articleConstants';
import { Input } from '@/shared/ui/Input';
import { ListBox } from '@/shared/ui/Popups';
import { createArticleFormActions } from '../../../model/slice/createArticleFormSlice';
import {
  getCreateArticleFormCodeField,
  getCreateArticleFormImageCaptionField,
  getCreateArticleFormImageUrlField,
  getCreateArticleFormParagraphField,
  getCreateArticleFormParagraphsArray,
  getCreateArticleFormTitleField,
} from '../../../model/selectors/createArticleFormSelectors';
import styles from './AddArticleContent.module.scss';

interface AddArticleContentProps {
  className?: string;
}

export const AddArticleContent = memo((props: AddArticleContentProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation('articles');
  const [showSelect, setShowSelect] = useState<boolean>(false);
  const [showInput, setShowInput] = useState(false);
  const [selectedContentType, setSelectedContentType] = useState('');
  // const [value, setValue] = useState<string>();
  const titleTextContent = useSelector(getCreateArticleFormTitleField);
  const paragraphsArrayTextContent = useSelector(getCreateArticleFormParagraphsArray);
  const paragraphFieldTextContent = useSelector(getCreateArticleFormParagraphField);
  const imageCaptionFieldContent = useSelector(getCreateArticleFormImageCaptionField);
  const imageUrlFieldContent = useSelector(getCreateArticleFormImageUrlField);
  const codeFieldContent = useSelector(getCreateArticleFormCodeField);
  const dispatch = useAppDispatch();

  const onChangeContentHandler = useCallback((value: string) => {
    switch (value) {
    case ArticleContentType.CODE:
      setSelectedContentType(ArticleContentType.CODE);
      // dispatch(createArticleFormActions.setCodeContent({ id: 0, type: ArticleContentType.CODE, code: '' }));
      break;
    case ArticleContentType.TEXT:
      setSelectedContentType(ArticleContentType.TEXT);
      // dispatch(createArticleFormActions.setTextContent({
      //   id: 0, type: ArticleContentType.TEXT, title: '', paragraphs: [''],
      // }));
      break;
    case ArticleContentType.IMAGE:
      setSelectedContentType(ArticleContentType.IMAGE);
      // dispatch(createArticleFormActions.setImageContent({
      //   id: 0, type: ArticleContentType.IMAGE, imageUrl: '', imageCaption: '',
      // }));
      break;
    default:
      break;
    }

    setShowInput(true);
    setShowSelect(false);

    return null;
  }, []);

  const OnClickAddContentHandler = useCallback(() => {
    setShowSelect(true);
    setShowInput(false);
  }, []);

  const contentOptions = useMemo(() => Object.entries(ArticleContentType).map(([key, value]) => ({
    value: key,
    content: value,
  })), []);

  const onChangeCodeFieldContentHandler = useCallback((value: string) => {
    dispatch(createArticleFormActions.setCodeField(value || ''));
  }, [dispatch]);

  const onClickSaveCodeFieldHandler = useCallback(() => {
    dispatch(createArticleFormActions.setContent({ id: 0, type: ArticleContentType.CODE, code: codeFieldContent }));
    setShowInput(false);
  }, [codeFieldContent, dispatch]);

  const onChangeImageCaptionFieldContentHandler = useCallback((value: string) => {
    dispatch(createArticleFormActions.setImageCaptionField(value || ''));
  }, [dispatch]);

  const onChangeImageUrlFieldContentHandler = useCallback((value: string) => {
    dispatch(createArticleFormActions.setImageUrlField(value || ''));
  }, [dispatch]);

  const onClickSaveImageFieldHandler = useCallback(() => {
    dispatch(createArticleFormActions.setContent({
      id: 0, type: ArticleContentType.IMAGE, imageUrl: imageUrlFieldContent, imageCaption: imageCaptionFieldContent,
    }));
    setShowInput(false);
  }, [dispatch, imageCaptionFieldContent, imageUrlFieldContent]);

  return (
    <VStack max gap="16" className={classNames(styles.AddArticleContent, {}, [className])}>
      <Button
        onClick={OnClickAddContentHandler}
      >
        {t('Добавить контент')}
      </Button>

      <ListBox
        className={classNames(styles.selectContentType, { [styles.hidden]: !showSelect })}
        selectedValue={t('Тип контента')}
        items={contentOptions}
        onChange={onChangeContentHandler}
        direction="top right"
      />

      {showInput && selectedContentType === ArticleContentType.TEXT && (
        <>
          <textarea placeholder={t('Введите текст')} />
          <Button>
            {t('Добавить текст')}
          </Button>
        </>
      )}

      {showInput && selectedContentType === ArticleContentType.IMAGE && (
        <VStack max gap="16">
          <Input
            value={imageUrlFieldContent}
            onChange={onChangeImageUrlFieldContentHandler}
            placeholder={t('Добавьте ссылку на изображение')}
          />
          <Input
            value={imageCaptionFieldContent}
            onChange={onChangeImageCaptionFieldContentHandler}
            placeholder={t('Введите подпись к изображению')}
          />
          <Button
            onClick={onClickSaveImageFieldHandler}
          >
            {t('Добавить картинку')}
          </Button>
        </VStack>
      )}

      {showInput && selectedContentType === ArticleContentType.CODE && (
        <HStack max gap="16">
          <Input
            value={codeFieldContent}
            onChange={onChangeCodeFieldContentHandler}
            placeholder={t('Введите код')}
          />
          <Button
            onClick={onClickSaveCodeFieldHandler}
          >
            {t('Добавить код')}
          </Button>
        </HStack>
      )}

    </VStack>
  );
});
