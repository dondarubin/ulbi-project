import { StateSchema } from 'app/providers/StoreProvider';
import { IArticle } from 'entities/Article';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetailsSelectors';

describe('getArticleDetailsData.test', () => {
  test('should return state', () => {
    const articleData: DeepPartial<IArticle> = {
      article_id: 1,
      title: 'Mama',
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        articleData,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(articleData);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'dsa',
      },
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual('dsa');
  });

  test('should return is loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
});
