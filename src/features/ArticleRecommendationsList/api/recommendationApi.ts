import { rtkApi } from 'shared/api/rtkApi';
import { ArticleSortField, ArticleType, GetAllArticleResponse } from 'entities/Article';
import { SortOrder } from 'shared/constants/sort';

const recommendationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<GetAllArticleResponse, ArticleType>({
      query: (articleType) => ({
        url: '/articles',
        method: 'GET',
        params: {
          limit: 8,
          page: 1,
          sort: ArticleSortField.CREATED,
          order: SortOrder.DESC,
          search: '',
          type: articleType,
        },
      }),
    }),
  }),
});

export const useArticleRecommendationsList = recommendationApi.useGetArticleRecommendationsListQuery;
