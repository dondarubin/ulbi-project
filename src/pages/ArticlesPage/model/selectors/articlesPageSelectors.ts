import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPages?.isLoading;
export const getArticlesPageError = (state: StateSchema) => state.articlesPages?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlesPages?.view || ArticleView.TILE;
export const getArticlesPagePage = (state: StateSchema) => state.articlesPages?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPages?.limit;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPages?.hasMore;
export const getArticlesPageMounted = (state: StateSchema) => state.articlesPages?._mounted;
