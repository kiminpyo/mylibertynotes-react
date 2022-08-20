import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Random = () => {
    const script = [
        {
            id: 0,
            script: "밝을 때 퇴근했는데, 밤이야. 저녁이 없어.",
        },
        {
            id: 1,
            script: "제가 비록 이혼했지만, 제 인생에서 제일 잘한 게 결혼이에요. 어딜가서 이렇게 사랑스러운 아이를 만나겠어요.",
        },
        {
            id: 2,
            script: "사람이 좋으면 그 사람 사는 동네 먼저 검색해 보는 게 인간인데.",
        },
        {
            id: 3,
            script: "내성적인 사람은 그냥 내성적일 수 있게 편하게 내버려두면 안 되나?",
        },
        {
            id: 4,
            script: "우리 다 행복했으면 좋겠어. 쨍하고 햇볕 난 것처럼 구겨진 것 하나 없이.",
        },
        {
            id: 5,
            script: "못 하겠어요. 힘들어요.",
        },
    ];

    const b = Math.floor(Math.random() * script[script.length - 1].id + 1);

    const navigate = useNavigate();

    return (
        <Tooltip title='명대사 보러가기' arrow>
            <div
                className='random'
                id='random-wrapper'
                onClick={() => navigate("/scripts")}>
                {script[b].script}
            </div>
        </Tooltip>
    );
};

export default Random;
