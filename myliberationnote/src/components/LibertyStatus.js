import React, { useEffect } from "react";
import styled from "@emotion/styled";
const LibertyStatus = ({ average, total }) => {
    return (
        <LibertyStateWrap className="libertyStateWrap">
            <LibertyBubbleWrap>
                총 글쓴 횟수는 <Bold>{total}번</Bold>이고, 마신 술은{" "}
                <Bold>6병</Bold>이고, 평균 하트 수는
                <Bold> {average.toFixed(1)}</Bold>개입니다.
            </LibertyBubbleWrap>
        </LibertyStateWrap>
    );
};

export default LibertyStatus;

const LibertyStateWrap = styled.section`
    margin: 30px 0 0 0;
    width: 100%;
`;

const LibertyBubbleWrap = styled.div`
    animation: fadeIn 1s;
    line-height: 2;
    margin: auto;
    background-color: #ab77abf0;
    border-radius: 20px;
    padding: 40px 10px 40px 10px;
    margin: 10px 0 10px 0;
    font-size: 3vmax;
`;

const Bold = styled.span`
    font-weight: bold;
    font-size: 3.2vmax;
    color: antiquewhite;
`;
