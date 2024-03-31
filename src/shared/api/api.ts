import axios from 'axios';
import { RefreshResponseType } from 'entities/User/model/services/checkAuthData/checkAuthData.types';
import { TOKEN_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';

export const $api = axios.create({
  baseURL: __API__,
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(TOKEN_LOCALSTORAGE_KEY)}`;
  return config;
});

$api.interceptors.response.use((config) => config, async (err) => {
  const originalRequest = err.config;
  if (err.response.status === 401 && err.config && !err.config._isRetry) {
    try {
      originalRequest._isRetry = true;
      const response = await axios.get<RefreshResponseType>(`${__API__}/refresh`, { withCredentials: true });
      localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, response.data.accessToken);
      return $api.request(originalRequest);
    } catch (e) {
      console.log('Не авторизован');
    }
  }
  throw err;
});
