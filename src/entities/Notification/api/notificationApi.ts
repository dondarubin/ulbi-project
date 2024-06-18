import { rtkApi } from 'shared/api/rtkApi';
import { Notification } from '../model/types/notifications.types';

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], null>({
      query: () => ({
        url: '/notifications',
        method: 'GET',
        params: {

        },
      }),
    }),
  }),
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
