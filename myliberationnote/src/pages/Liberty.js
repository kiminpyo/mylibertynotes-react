import React, { useCallback, useEffect, useRef, useState } from "react";
import LibertyItem from "../components/LibertyItem";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_POSTS } from "../reducers/post";
import { useNavigate } from "react-router-dom";
import Auth from "../HOC/auth";
import styled from "@emotion/styled";
import LibertyBanner from "../components/LibertyBanner";

const Liberty = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { posts, postscount } = useSelector((state) => state?.post);
    const observerTargetEl = useRef(null);
    const page = useRef(0);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        dispatch({
            type: LOAD_POSTS,
        });
    }, []);
    useEffect(() => {
        if (!observerTargetEl.current) return;
        const io = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                dispatch({
                    type: LOAD_POSTS,
                    data: page.current++,
                });
            } else {
                return;
            }
            setLoading(() => true);
        });
        io.observe(observerTargetEl.current);
        return () => {
            setLoading(() => false);
            io.disconnect();
        };
    }, [observerTargetEl.current]);

    const onCreateSelf = () => {
        return navigate("/libertyedit");
    };

    return (
        <LibertyPage>
            <LibertyWrapper>
                <LibertyBanner />
                <LibertyItemWrap>
                    {posts?.map((item, i) => (
                        <LibertyItem item={item} key={i} />
                    ))}
                </LibertyItemWrap>
                <AddPost onClick={onCreateSelf}>+</AddPost>
                <div>{loading ? "로딩 중 입니다" : undefined}</div>
                <div ref={observerTargetEl} id="observer" />
            </LibertyWrapper>
        </LibertyPage>
    );
};

export default Auth(Liberty);
export const LibertyPage = styled.div`
    background-color: black;
`;
export const LibertyWrapper = styled.div`
    width: 80%;
    margin: auto;
    @media screen and (max-width: 420px) {
        width: 100%;
    }
`;

export const LibertyItemWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const AddPost = styled.div`
    color: white;
    line-height: 0.9;
    font-size: 40px;
    position: fixed;
    width: 40px;
    height: 40px;
    bottom: 60px;
    right: 30px;
    background-color: black;
    border-radius: 50%;
    text-align: center;
    @media screen and (max-width: 425px) {
        width: 30px;
        right: 10px;
        height: 30px;
        bottom: 30px;
        font-size: 30px;
    }
`;
