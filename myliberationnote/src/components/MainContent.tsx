import styled from "@emotion/styled";
import React from "react";
import { useNavigate } from "react-router-dom";

const MainContent = () => {
    const onClickNavigative = () => {
        const mainTextContent = document.querySelector(
            "div.main-text-content"
        ) as HTMLElement;
        mainTextContent.style.visibility = "visible";
        const mainTextPicture = document.querySelectorAll(
            ".main-text-picture > i"
        );
        mainTextPicture.forEach((item: any) => (item.style.animation = "none"));
        mainTextContent.style.animation = "fadeIn 2s";
    };
    const navigate = useNavigate();
    return (
        <>
            <MainTextWrap>
                <MainTextHead title="mainTextTitle">Today's feeling</MainTextHead>

                <MainTextPicture data-testid="mainTextPicture" onClick={onClickNavigative}>
                    <MainTextPictureSide>
                        <Heart className="fa-solid fa-heart heart" />
                    </MainTextPictureSide>
                    <MainTextPictureSide>
                        <Heart className="fa-solid fa-heart-crack heart" />
                    </MainTextPictureSide>
                </MainTextPicture>
                <MainTextContent data-testid="mainTextConent" className="main-text-content">
                    들려주시겠어요?
                    <br />
                    <GoBoradButton className="fa-solid fa-circle-down go-board" />
                    <br />
                    <MainContentButton
                        data-testid = "mainContentButton"
                        onClick={() => {
                            return navigate("/liberty");
                        }}>
                        가기
                    </MainContentButton>
                </MainTextContent>
            </MainTextWrap>
        </>
    );
};

export default MainContent;

const MainTextWrap = styled.div`
    padding: 0 0 20vh 0;
    color: white;
    text-align: center;
`;
const MainTextHead = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
`;
const MainContentButton = styled.button`
    margin-top: 10px;
    list-style: none;
    border-radius: 10px;
    border: none;

    width: 100px;
    height: 30px;
    cursor: pointer;
`;

const MainTextPicture = styled.div`
    margin: auto;
    margin-top: 1rem;
    justify-content: center;
    display: flex;
    > div:hover {
        opacity: 1;
    }
    & div:active {
        opacity: 1;
    }
`;

const MainTextContent = styled.div`
    margin-top: 5vh;
    font-size: 1.1rem;
    visibility: hidden;
`;

const MainTextPictureSide = styled.div`
    width: 150px;
    padding: 10px 0 10px 0;
    margin: 0 10px 0 10px;
    background: #7b2d89;
    border-radius: 40%;
    opacity: 0.7;
    animation: shaking 1s infinite;
    animation-direction: alternate;
`;

const Heart = styled.i`
    font-size: 3rem;
    line-height: 3;
    color: rgba(255, 0, 0, 0.87);
`;

const GoBoradButton = styled.div``;
