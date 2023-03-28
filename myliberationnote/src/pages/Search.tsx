import React, { useEffect, useRef, useState } from "react";
import {
    NavigateFunction,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import LibertyBanner from "../components/LibertyBanner";
import LibertyItem from "../components/LibertyItem";
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
const Search = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const { state } = useLocation();

    const observerTargetEl = useRef(null);
    const [list, setItem] = useState([]);

    const [loading, setLoading] = useState(false);

    /**
     * @params 게시글 수정 페이지로 이동
     */
    const onCreateSelf: React.MouseEventHandler<HTMLDivElement> = (): void =>
        navigate({
            pathname: "/libertyedit",
        });

    useEffect(() => {
        AxiosInstance.get(`${requests.fetchHashtag}/${id}`).then((res) =>
            setItem(() => res.data)
        );
    }, [id]);

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
                    {list
                        ? list.map((v, i) => <LibertyItem item={v} key={i} />)
                        : null}
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
