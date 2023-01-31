import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LibertyBanner from "../components/LibertyBanner";
import axios from "axios";
import LibertyItem from "../components/LibertyItem";
import { AddPost, LibertyItemWrap, LibertyWrapper } from "./Liberty";
import styled from "@emotion/styled";
const Search = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();
    const [list, setItem] = useState([]);
    console.log(state);
    useEffect(() => {
        axios
            .get(`http://localhost:80/hashtag/${id}`)
            .then((res) => setItem(() => res.data));
    }, []);

    const onCreateSelf = () => {
        return navigate("/libertyedit");
    };
    const observerTargetEl = useRef(null);
    const [loading, setLoading] = useState(false);
    return (
        <LibertyWrapper>
            <LibertyBanner />
            {state ? (
                <LibertyBack onClick={() => navigate(-1)}>초기화</LibertyBack>
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
    );
};

export default Search;

const LibertyBack = styled.div`
    text-align: center;
`;
