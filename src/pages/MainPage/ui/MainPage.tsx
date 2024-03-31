import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  // async function getUsers() {
  //   try {
  //     const res = await $api.get<RefreshResponseType>(`${__API__}/users`, { withCredentials: true });
  //     console.log(res);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  return (
    <div>
      {/* <button onClick={getUsers}>Получить пользоваетелей</button> */}
      <BugButton />
      {t('Главная страница')}
    </div>
  );
});

export default MainPage;
