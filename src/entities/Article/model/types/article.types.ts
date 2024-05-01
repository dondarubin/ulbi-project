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

// TODO сделать на фронте и на беке imageCaption optional
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
  article_id: number;
  user_id: number;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  created_at: string;
  type: ArticleTypes[];
  content: ArticleContent[]
}

export enum ArticleView {
  LIST = 'list',
  TILE = 'tile'
}

export interface ArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  articleData?: IArticle;
}
