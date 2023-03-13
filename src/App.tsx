import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './index.scss';
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";

const App = () => {
    return (
        <div className='app'>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageLazy/>}></Route>
                    <Route path={'/about'} element={<AboutPageLazy/>}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;