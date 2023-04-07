import styled from "@emotion/styled";
import React from "react";
import { useTyping } from "../hooks/useTyping";
import { script } from "../utils/dummyScript";
const Random = React.memo(() => {
    const randonNum = Math.floor(
        Math.random() * script[script.length - 1].id + 1
    );
    useTyping(script[randonNum].script, ".random", 60);

    return (
        <Script>
            <RandomText className="random" />
            <RandomLogo>-나의 해방일지 중-</RandomLogo>
        </Script>
    );
});

export default Random;

const Script = styled.div`
    width: 80%;
    margin: auto;
    color: white;
    font-weight: bold;
    font-size: 30px;
`;

const RandomText = styled.div`
    font-size: 1.5rem;

    @media screen and (max-width: 425px) {
        font-size: 1rem;
    }
`;

const RandomLogo = styled.div`
    padding-top: "5px";
    font-size: "1rem";
    font-weight: "bold";
`;
