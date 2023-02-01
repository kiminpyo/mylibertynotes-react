import React from "react";
import MainContent from "../components/MainContent";
import Auth from "../HOC/auth";
import MiddleSide from "../components/AppLayout/MiddleSide";
import axios from "axios";
const Main = () => {
    return (
        <div>
            <MiddleSide />
            <MainContent />
        </div>
    );
};

export default Auth(Main);
