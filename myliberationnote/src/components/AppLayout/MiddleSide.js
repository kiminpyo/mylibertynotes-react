import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    padding: 40vh 0 40vh 0;
    text-align: center;
`;
