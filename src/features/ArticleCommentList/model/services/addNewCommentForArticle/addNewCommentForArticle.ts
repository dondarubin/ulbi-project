import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThinkAPI } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article';
import { IComment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { ValidateCommentErrors } from 'features/AddNewComment';
import { fetchArticleCommentsById } from '../fetchArticleCommentsById/fetchArticleCommentsById';

// TODO написать тесы
export const addNewCommentForArticle = createAsyncThunk<IComment, string, ThinkAPI<ValidateCommentErrors>>(
  'article/createNewComment',
  async (commentText, thunkAPI) => {
    const {
      dispatch, rejectWithValue, extra, getState,
    } = thunkAPI;

    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData?.userId || !commentText || !article?.article_id) {
      return rejectWithValue(ValidateCommentErrors.NO_DATA);
    }

    if (commentText.length > 500) {
      return rejectWithValue(ValidateCommentErrors.INCORRECT_DATA);
    }

    try {
      const response = await extra.api.post<IComment>(`/comments/${article.article_id}`, {
        userId: userData.userId,
        commentText,
      });

      console.log(response.data);
      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchArticleCommentsById(String(article.article_id)));

      return response.data;
    } catch (e) {
      return rejectWithValue(ValidateCommentErrors.SERVER_ERROR);
    }
  },
);
