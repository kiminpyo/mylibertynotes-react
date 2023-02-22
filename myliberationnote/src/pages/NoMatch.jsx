import styled from "@emotion/styled";
import React from "react";
import { useNavigate } from "react-router-dom";

const NoMatch = ({ text }) => {
    console.log(text);
    const navigate = useNavigate();
    return (
        <Wrapper>
            <NoMatchText>
                {text ? `${text}` : "잘못된 접근경로 입니다."}
            </NoMatchText>
            <Button onClick={() => navigate(-1)}>돌아가기</Button>
        </Wrapper>
    );
};

export default NoMatch;

const Wrapper = styled.div`
    width: 100%;
`;
const NoMatchText = styled.span`
    position: absolute;
    font-size: 0.9rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const Button = styled.button`
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
