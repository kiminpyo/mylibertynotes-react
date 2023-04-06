import React, { useState, useEffect } from "react";
import "./animation.css";
import "./fontAwesome.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import Intro from "./pages/Intro";
import ScrollRestoration from "./components/ScrollRestoration";
import Liberty from "./pages/Liberty";
import MyPage from "./pages/MyPage";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import LibertyDetail from "./components/Liberty/LibertyDetail";
import LibertyEdit from "./components//Liberty/LibertyEdit";
import AppLayout from "./components/AppLayout/AppLayout";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useDispatch } from "react-redux";
import { LOAD_ME } from "./reducers/user";

function App(): ReactJSXElement {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: LOAD_ME,
        });
    }, [dispatch]);
    return (
        <>
            <ScrollRestoration />
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Main />} />
                    <Route path="/intro" element={<Intro />} />
                    <Route path="/liberty" element={<Liberty />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/libertyedit" element={<LibertyEdit />} />
                    <Route path="/liberty/:id" element={<LibertyDetail />} />
                    <Route path="/liberty/search/:id" element={<Search />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
