export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  ECONOMY = 'Economy',
  BUSINESS = 'Business',
}

type ExcludeAll<T> = T extends 'ALL' ? never : T;

export type ArticleTypeWithoutAll = ExcludeAll<ArticleType>;

export enum ArticleContentType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  CODE = 'CODE'
}

export enum ArticleView {
  LIST = 'list',
  TILE = 'tile'
}

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'created_at'
}
