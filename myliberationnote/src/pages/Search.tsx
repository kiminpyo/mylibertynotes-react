import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LibertyBanner from "../components/Liberty/LibertyBanner";
import LibertyItemContainer from "../components/Liberty/LiberyItemContainer";
import {
    AddPost,
    LibertyItemWrap,
    LibertyPage,
    LibertyWrapper,
} from "./Liberty";

import styled from "@emotion/styled";
import { AxiosInstance } from "../Axios/instance";
import requests from "../Axios/requests";
import Auth from "../HOC/auth";
import { useDispatch } from "react-redux";
import { LOAD_ME } from "../reducers/user";

const Search = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useParams();
    const { state } = useLocation();

    const observerTargetEl = useRef(null);
    const [list, setList] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AxiosInstance.get(`${requests.fetchHashtag}/${id}`).then((res) =>
            setList(() => res.data)
        );
        dispatch({
            type: LOAD_ME,
        });
    }, [id]);
    /**
     * @params 게시글 수정 페이지로 이동
     */
    const onCreateSelf: React.MouseEventHandler<HTMLDivElement> = (): void =>
        navigate({
            pathname: "/libertyedit",
        });

    return (
        <LibertyPage>
            <LibertyWrapper>
                <LibertyBanner />
                {state ? (
                    <LibertyBack onClick={() => navigate("/liberty")}>
                        초기화
                    </LibertyBack>
                ) : null}
                <LibertyItemWrap>
                    <LibertyItemContainer posts={list} />
                </LibertyItemWrap>
                <AddPost onClick={onCreateSelf}>+</AddPost>
                <div>
                    {loading
                        ? "로딩중로딩중로딩중로딩중로딩중로딩중로딩중로딩중로딩중로딩중로딩중로딩중로딩중로딩중로딩중로딩중로딩중로딩중로딩중로딩중로딩중로딩중로딩중"
                        : undefined}
                </div>
                <div ref={observerTargetEl} />
            </LibertyWrapper>
        </LibertyPage>
    );
};

export default Auth(Search, true);

const LibertyBack = styled.div`
    text-align: center;
`;
