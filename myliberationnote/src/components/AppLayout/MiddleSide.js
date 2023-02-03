import React from "react";
import Random from "../Random";
import styled from "@emotion/styled";
const MiddleSide = () => {
    return (
        <HeadMidlleSide>
            <Random />
        </HeadMidlleSide>
    );
};

export default MiddleSide;

const HeadMidlleSide = styled.div`
    padding: 30vh 0 40vh 0;
    text-align: center;
`;
