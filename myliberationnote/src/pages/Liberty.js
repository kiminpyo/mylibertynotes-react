import React, { useEffect, useRef, useState } from "react";
import LibertyItem from "../components/LibertyItem";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_POSTS } from "../reducers/post";
import { useNavigate } from "react-router-dom";
import LibertyBanner from "../components/LibertyBanner";
import Auth from "../HOC/auth";

import styled from "@emotion/styled";

const Liberty = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { posts, postscount } = useSelector((state) => state?.post);
    const [target, observerTargetEl] = useState(null);
    const [lastText, setLastText] = useState(false);
    const [loading, setLoading] = useState(true);
    let page = useRef(0);
    useEffect(() => {
        if (posts.length >= 82) {
            setLoading(false);
            setLastText((prev) => !prev);
        }
    }, [posts]);
    useEffect(() => {
        let observe;
        if (target) {
            observe = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && loading) {
                            dispatch({
                                type: LOAD_POSTS,
                                data: page.current++,
                            });
                        }
                    });
                },
                { threshold: 0.2 }
            );
            observe.observe(target);
        }
        return () => observe && observe.disconnect();
    }, [target]);
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
                <div>{lastText ? "마지막 페이지 입니다" : undefined}</div>
                <AddPost onClick={onCreateSelf}>+</AddPost>
                <div ref={observerTargetEl} style={{ height: "1px" }} />
            </LibertyWrapper>
        </LibertyPage>
    );
};

export default Auth(Liberty, true);
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
