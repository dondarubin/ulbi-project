import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/constants/sort';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.TILE;
export const getArticlesPagePage = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 8;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesPageMounted = (state: StateSchema) => state.articlesPage?._mounted;
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order ?? SortOrder.ASC;
export const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticleSortField.CREATED;
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? '';
export const getArticlesPageType = (state: StateSchema) => state.articlesPage?.type ?? ArticleType.ALL;
