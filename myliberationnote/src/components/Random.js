import styled from "@emotion/styled";
import { Tooltip } from "@mui/material";
import React from "react";
import { useTyping } from "../hooks/useTyping";

import { script } from "../store/dummyScript";
const Random = React.memo(() => {
    const randonNum = Math.floor(
        Math.random() * script[script.length - 1].id + 1
    );
    useTyping(script[randonNum].script, ".random", 60);

    return (
        <Script>
            <RandomText className="random" />
            <div
                style={{
                    paddingTop: "5px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                }}>
                -나의 해방일지 중-
            </div>
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
