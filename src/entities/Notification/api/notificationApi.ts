import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '../model/types/notifications.types';

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], number>({
      query: (userId) => ({
        url: `/notifications/${userId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
