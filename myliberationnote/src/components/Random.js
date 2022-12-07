import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { script } from "../store/dummyScript";
const Random = React.memo(() => {
    const randonNum = Math.floor(
        Math.random() * script[script.length - 1].id + 1
    );
    const navigate = useNavigate();
    return (
        <Tooltip title="명대사 보러가기" arrow>
            <div
                className="random"
                id="random-wrapper"
                onClick={() => navigate("/scripts")}>
                {script[randonNum].script}
                <div style={{ paddingTop: "5px" }}>-나의 해방일지 중-</div>
            </div>
        </Tooltip>
    );
});

export default Random;
