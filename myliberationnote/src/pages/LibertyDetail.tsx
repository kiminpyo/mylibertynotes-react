import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { LOAD_POST_DETAIL } from "../reducers/post";
import Auth from "../HOC/auth";

import LibertyContainer from "../components/PageContainer";

import styled from "@emotion/styled";
import LibertyIcons from "../components/Liberty/LibertyIcons";
import LibertyInformation from "../components/Liberty/LibertyInformation";
import ButtonWrap from "../components/ButtonWrap";
const LibertyDetail = () => {
    const { id }: any = useParams();
    const dispatch = useDispatch();
    const post = useSelector((state: any) => state.post?.post);
    const { loadPostDetailFailure, loadPostDetailLoading } = useSelector(
        (state: any) => state.post
    );
    useEffect(() => {
        dispatch({
            type: LOAD_POST_DETAIL,
            data: id,
        });
    }, [dispatch, id]);

    return (
        <LibertyContainer
            loading={loadPostDetailLoading}
            failure={loadPostDetailFailure}>
            <LiberyStyleWrapper>
                <LibertyIcons post={post} />
                <LibertyInformation post={post} />
                <LibertyTextArea>{post.content}</LibertyTextArea>
                <ButtonWrap id={id} />
            </LiberyStyleWrapper>
        </LibertyContainer>
    );
};

export default Auth(LibertyDetail, true);

export const TextLabel = styled.span`
    font-size: 0.7rem;
`;

const LibertyTextArea = styled.textarea`
    margin-top: 5vh;
    width: 100%;
    overflow: auto;
    white-space: pre-line;
    word-wrap: break-word;
    font-size: 1rem;
    box-sizing: border-box;
    min-height: 100px;
    resize: vertical;
    border: none;
    border-radius: 5px;
    color: black;
    background-color: #ececec;
    padding: 20px;
`;
const LiberyStyleWrapper = styled.div`
    text-align: center;
    width: 90%;
    margin: auto;
    margin-top: 50px;
`;
