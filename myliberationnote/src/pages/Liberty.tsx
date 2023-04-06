import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_POSTS } from "../reducers/post";
import { useNavigate } from "react-router-dom";
import LibertyBanner from "../components/Liberty/LibertyBanner";
import Auth from "../HOC/auth";
import styled from "@emotion/styled";

import LibertyItemContainer from "../components/Liberty/LiberyItemContainer";

const Liberty = () => {
    let page = useRef(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { posts } = useSelector((state: any) => state?.post);

    useEffect(() => {
        if (posts) {
            return;
        } else {
            dispatch({
                type: LOAD_POSTS,
                data: 0,
            });
        }
    }, [dispatch, posts]);
    const [target, observerTargetEl]: [any, any] = useState();

    useEffect(() => {
        const onIntersect = async ([entry]: any, observer: any) => {
            if (entry.isIntersecting) {
                // observer.unobserve(entry.target);
                dispatch({
                    type: LOAD_POSTS,
                    data: page.current++,
                });
                // observer.observe(entry.target);
            }
        };
        let observe: any;
        if (target) {
            console.log("렌더");
            observe = new IntersectionObserver(onIntersect, { threshold: 0.4 });
            observe.observe(target);
        }
        return () => observe && observe.disconnect();
    }, [target, dispatch]);
    const onCreateSelf = () => {
        return navigate("/libertyedit");
    };
    return (
        <LibertyPage>
            <LibertyWrapper>
                <LibertyBanner />
                <LibertyItemWrap>
                    <LibertyItemContainer posts={posts} />
                </LibertyItemWrap>
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

export const LibertyItemWrap = styled.div``;

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
