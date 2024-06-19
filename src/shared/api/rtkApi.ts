import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TOKEN_LOCALSTORAGE_KEY } from '@/shared/constants/localstorage';

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      const token = `Bearer ${localStorage.getItem(TOKEN_LOCALSTORAGE_KEY)}`;
      if (token) {
        headers.set('Authorization', token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
