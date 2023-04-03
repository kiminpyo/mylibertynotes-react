import styled from "@emotion/styled";
import React from "react";

const Loader = () => {
    return <LoaderWrapper>로딩 중..</LoaderWrapper>;
};

export default Loader;

const LoaderWrapper = styled.span`
    position: absolute;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
