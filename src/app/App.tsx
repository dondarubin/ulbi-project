import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch } from 'react-redux';
import { TOKEN_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';
import { checkAuthData } from 'entities/User';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem(TOKEN_LOCALSTORAGE_KEY)) {
      dispatch(checkAuthData());
    }
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
