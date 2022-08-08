import React, { createRef, useRef, useState } from "react";
const qnaList = [
    {
        id: 1,
        q: "내가 주로 사용하는 타입은?",
        a: [
            { answer: "a. 원거리", type: ["원딜", "미드", "탑"] },
            { answer: "b. 근거리", type: ["미드", "정글", "탑"] },
            { answer: "c. 둘 다사용", type: ["미드", "탑"] },
        ],
    },
    {
        id: 2,
        q: "팀들이 내 탓을 한다. 나의 반응은?",
        a: [
            { answer: "a. 어 차단", type: ["원딜", "미드", "탑"] },
            {
                answer: "b. 내가 아는 모든 욕 동원",
                type: ["미드", "정글", "탑"],
            },
            { answer: "c. 시작해볼까?", type: ["미드", "탑"] },
        ],
    },
    {
        id: 3,
        q: "팀들이 내 탓을 한다. 나는???",
        a: [
            { answer: "a. 어 차단", type: ["원딜", "미드", "탑"] },
            {
                answer: "b. 내가 아는 모든 욕 동원",
                type: ["미드", "정글", "탑"],
            },
            { answer: "c. 시작해볼까?", type: ["미드", "탑"] },
        ],
    },
    {
        id: 4,
        q: "팀들이 내 탓을 한다. 나는???",
        a: [
            { answer: "a. 어 차단", type: ["원딜", "미드", "탑"] },
            {
                answer: "b. 내가 아는 모든 욕 동원",
                type: ["미드", "정글", "탑"],
            },
            { answer: "c. 시작해볼까?", type: ["미드", "탑"] },
        ],
    },
];

const Test = () => {
    const onClickTest = () => {
        const startBtn = document.getElementById("startBtn");
        const question = document.getElementById("question");
        const answerList = document.getElementById("answerList");
        startBtn.style.display = " none";

        for (let i in qnaList) {
            console.log(qnaList[i]);
        }
        const answer = document.createElement("div");
        answer.innerText = "hi";
        answerList.appendChild(answer);
    };
    return (
        <>
            <div id='startBtn' onClick={onClickTest}>
                시작하기
            </div>
            <div id='question'></div>
            <div id='answerList'></div>
        </>
    );
};

export default Test;
