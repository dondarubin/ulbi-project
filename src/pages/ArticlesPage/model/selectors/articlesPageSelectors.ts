import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleTypes, ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/constants/sort';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPages?.isLoading;
export const getArticlesPageError = (state: StateSchema) => state.articlesPages?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlesPages?.view || ArticleView.TILE;
export const getArticlesPagePage = (state: StateSchema) => state.articlesPages?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPages?.limit || 12;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPages?.hasMore;
export const getArticlesPageMounted = (state: StateSchema) => state.articlesPages?._mounted;
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPages?.order ?? SortOrder.ASC;
export const getArticlesPageSort = (state: StateSchema) => state.articlesPages?.sort ?? ArticleSortField.CREATED;
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPages?.search ?? '';
export const getArticlesPageType = (state: StateSchema) => state.articlesPages?.type ?? ArticleTypes.ALL;
