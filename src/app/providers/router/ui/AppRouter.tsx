import React, {Suspense} from 'react';
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import {Route, Routes} from "react-router-dom";

const AppRouter = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {Object.values(routeConfig).map(({element, path}) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))}
                </Routes>
            </Suspense>
        </div>
    );
};

export default AppRouter;