import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AuthPage from "../pages/AuthPage/AuthPage";

const RouterWrapper = () => {
    return (
            <Routes>
                <Route element={<MainPage/>} path={"/data"}/>
                <Route element={<AuthPage/>} path={"/auth"}/>
                <Route element={<NotFoundPage/>} path={"*"}/>
            </Routes>
    );
};

export default RouterWrapper;