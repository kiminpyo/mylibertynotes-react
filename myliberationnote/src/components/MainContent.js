import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const MainContent = () => {
    const {userInfo} = useSelector((state) => state.user)
    const onClickNegative = () => {
        
        const mainTextContent = document.querySelector("div.main-text-content");
        mainTextContent.style.visibility = "visible";
        const mainTextPicture = document.querySelectorAll(
            ".main-text-picture > i"
        );
        mainTextPicture.forEach((v) => (v.style.animation = "none"));
        mainTextContent.style.animation = "fadeIn 2s";
    };
    return (
        <>
            <div className='main-wrapper'>
                <div className='main-text-wrap'>
                    <div className='main-text'>
                        <div className='main-text-header'>오늘 기분은요?</div>
                        <div className='main-text-picture'>
                            <i
                                onClick={onClickNegative}
                                className='fa-solid fa-heart heart'></i>
                            <i className='fa-solid fa-arrow-left arrow-left'></i>
                            <i className='fa-solid fa-arrow-right arrow-right'></i>
                            <i
                                className='fa-solid fa-heart-crack heart'
                                onClick={onClickNegative}></i>
                        </div>
                        <div className='main-text-content'>
                            괜찮으시다면, <br />
                            저에게 들려주시겠어요?
                            <br />
                            <i className='fa-solid fa-circle-down go-board'></i>
                            <br />
                            <br />
                            <button>
                            <Link to={userInfo ? '/libertyself' : '/' } onClick={()=>{
                          
                          if(!userInfo){
                           alert('로그인 이후에 접속이 가능해요')
                          }
                      
                     
                   }}>가기</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='main-content'></div>
            </div>
        </>
    );
};

export default MainContent;
