import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { fetchNextArticlePage } from './fetchNextArticlePage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlePage.test', () => {
  test('success fetch', async () => {
    const testThunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPages: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await testThunk.callThunk();

    // pending, fulfilled, и 2 dispatch внутри fetchNextArticlePage
    expect(testThunk.dispatch).toBeCalledTimes(4);
    // функция вызвана с нужным аргументом
    expect(fetchArticlesList).toBeCalledWith({ page: 3 });
  });

  test('fetchArticlesList not called', async () => {
    const testThunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPages: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await testThunk.callThunk();

    // pending, fulfilled
    expect(testThunk.dispatch).toBeCalledTimes(2);
    // функция не вызвана
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

  test('loading', async () => {
    const testThunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPages: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: false,
      },
    });

    await testThunk.callThunk();

    // pending, fulfilled
    expect(testThunk.dispatch).toBeCalledTimes(2);
    // функция не вызвана
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
