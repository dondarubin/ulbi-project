export enum ArticleContentType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  CODE = 'CODE'
}

export interface ArticleContentBase {
  id: number;
  type: ArticleContentType
}

export interface ArticleTextContent extends ArticleContentBase {
  type: ArticleContentType.TEXT;
  title?: string;
  paragraphs: string[];
}

export interface ArticleImageContent extends ArticleContentBase {
  type: ArticleContentType.IMAGE;
  imageUrl: string;
  imageCaption: string;
}

export interface ArticleCodeContent extends ArticleContentBase {
  type: ArticleContentType.CODE;
  code: string;
}

export type ArticleContent = ArticleTextContent | ArticleImageContent | ArticleCodeContent

export enum ArticleTypes {
  IT = 'IT',
  ECONOMY = 'Economy',
  BUSINESS = 'Business',
}

export interface IArticle {
  articleId: number;
  userId: number;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleTypes[];
  content?: ArticleContent[]
}

export interface ArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  articleData?: IArticle;
}
