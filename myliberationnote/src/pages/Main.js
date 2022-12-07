import React from "react";
import MainContent from "../components/MainContent";
import Auth from "../HOC/auth";

const Main = () => {
    return (
        <>
            <MainContent />
        </>
    );
};

export default Auth(Main);
