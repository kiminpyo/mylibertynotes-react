import styled from "@emotion/styled";
import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

const NoMatch = ({ text }: any) => {
    const navigate: NavigateFunction = useNavigate();
    return (
        <Wrapper>
            <NoMatchText>nomatch</NoMatchText>
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
