import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import requests from "../Axios/requests";
import { AxiosInstance } from "../Axios/instance";

const Auth = (SpecificComponent: any, option: true | false | null = null) => {
    const Authentication = () => {
        const navigate = useNavigate();
        useEffect(() => {
            AxiosInstance.get(requests.fetchAuth)
                .then((res: any) => {
                    if (option === false) {
                        if (res.data?.email) {
                            return navigate("/");
                        }
                    }
                })
                .catch((res) => {
                    if (option) {
                        // 로그인을 하지 않았다면,
                        if (!res.data) {
                            alert("로그인 후 이용해주세요");
                            return navigate("/login");
                        }
                    }
                });

            // 로그인 권한이 필요할때,
        }, [navigate]);

        return <SpecificComponent />;
    };
    return Authentication;
};

export default Auth;
