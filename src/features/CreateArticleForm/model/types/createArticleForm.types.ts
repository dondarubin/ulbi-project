import {
  ArticleCodeContent,
  ArticleContent,
  ArticleImageContent,
  ArticleTextContent,
  ArticleTypeWithoutAll,
} from '@/entities/Article';
import { ValidateCreateArticleErrors } from '../consts/consts';

export interface CreateArticleFormSchema {
  // articleForm?: CreatedArticleType;
  title: string,
  subtitle: string,
  img: string,
  type: ArticleTypeWithoutAll[],

  titleField?: string,
  paragraphField?: string,
  paragraphsArray: string[],

  imageUrlField?: string,
  imageCaptionField?: string,

  codeField?: string,

  content: ArticleContent[],
  isLoading: boolean,
  validateError?: ValidateCreateArticleErrors[],
}
