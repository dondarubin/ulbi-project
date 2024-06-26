import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { initArticlesPage } from './initArticlesPage';
import { articlesPageActions } from '../../slice/articlesPageSlice';

jest.mock('../fetchArticlesList/fetchArticlesList');
jest.mock('../../slice/articlesPageSlice');

describe('initArticlesPage.test', () => {
  test('success fetch', async () => {
    const testThunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
      },
    });

    const searchParams = new URLSearchParams();
    await testThunk.callThunk(searchParams);

    // pending, fulfilled, и 2 dispatch внутри initArticlesPage
    expect(testThunk.dispatch).toBeCalledTimes(4);
    // функция вызвана с нужным аргументом
    expect(fetchArticlesList).toBeCalled();
  });

  test('fetchArticlesList not called', async () => {
    const testThunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        _mounted: true,
      },
    });

    const searchParams = new URLSearchParams();
    await testThunk.callThunk(searchParams);

    // pending, fulfilled
    expect(testThunk.dispatch).toBeCalledTimes(2);
    // функция не вызвана
    expect(fetchArticlesList).not.toHaveBeenCalled();
    // action не вызван
    expect(articlesPageActions.initState).not.toHaveBeenCalled();
  });
});
