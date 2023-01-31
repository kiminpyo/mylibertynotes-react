import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOAD_ME } from "../reducers/user";

const Auth = (SpecificComponent, option = null) => {
    const Authentication = () => {
        const navigate = useNavigate();

        useEffect(() => {
            axios.get("http://localhost:80/user").then((res) => {
                if (option) {
                    // 로그인을 하지 않았다면,

                    if (!res.data?.email) {
                        alert("로그인 후 이용해주세요");
                        return navigate("/login");
                    }
                    //  로그인을 했는데 로그인 페이지에 접속 시
                } else if (option === false) {
                    if (res.data?.email) {
                        return navigate("/");
                    }
                }
            });

            // 로그인 권한이 필요할때,
        }, []);

        return <SpecificComponent />;
    };
    return Authentication;
};

export default Auth;
