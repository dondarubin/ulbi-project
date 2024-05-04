import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPages?.isLoading;
export const getArticlesPageError = (state: StateSchema) => state.articlesPages?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlesPages?.view || ArticleView.TILE;
