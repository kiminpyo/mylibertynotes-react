import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_POST, EDIT_POST } from "../reducers/post";
import Auth from "../HOC/auth";

import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import SmokingRoomsIcon from "@mui/icons-material/SmokingRooms";
import { Rating } from "@mui/material";
import Modal from "./Modal/Modal";

const LibertyEdit = () => {
    const contentRef = useRef();
    const { state } = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [editRating, setEditRating] = useState(state?.rating || 0);
    const [editDrink, setEditDrink] = useState(state?.drink || 0);
    const [editSmoke, setEditSmoke] = useState(state?.smoke || 0);
    const [editContent, setEditContent] = useState(state?.content || "");
    const [hashtag, setHashtag] = useState("");
    const [emptyMessage, setEmptyMessage] = useState(false);
    const today = new Date().toISOString().slice(0, 10);
    const input = document.getElementsByClassName("input");
    const hashtagListWrap = document.querySelector(".hashtag-list-wrap");
    const div = document.createElement("div");
    div.setAttribute("class", "hashtag");
    const divLength = document.querySelectorAll("div.hashtag").length;
    const hashTagList = [];

    const removeHashtag = (e) => {
        div.remove();
    };
    div.addEventListener("click", removeHashtag);
    const onClickSubmit = () => {
        const hashTagArr = document.querySelectorAll(".hashtag");
        for (let x of hashTagArr) {
            hashTagList.push(x.innerText);
        }
        const data = {
            content: editContent,
            rating: editRating,
            smoke: editSmoke,
            drink: editDrink,
            hashtag: hashTagList?.join(","),
            id: state?.id,
        };
        if (state?.id) {
            dispatch({
                type: EDIT_POST,
                data,
            });
        } else {
            dispatch({
                type: ADD_POST,
                data,
            });
        }
        return navigate("/liberty");
    };
    const onSaveHashtag = (e) => {
        e.preventDefault();
        if (divLength >= 3) {
            alert("개시글은 3개까지만!");
            return;
        }
        if (hashtag.length >= 20) {
            return alert("20자 미만으로");
        }
        if (hashtag.match(/[^ㄱ-ㅎ가-힣a-zA-Z0-9]/gi) || hashtag.trim() == "") {
            return setEmptyMessage(true);
        }
        console.log("hi");
        div.innerText = hashtag;
        hashtagListWrap.append(div);
        setEmptyMessage(false);
        // 초기화
        input[0].value = "";
    };
    const onChangeRating = (e) => {
        setEditRating(() => e.target.value);
    };
    const onChangeSmoke = (e) => {
        setEditSmoke(() => e.target.value);
    };
    const onChangeDrink = (e) => {
        setEditDrink(() => e.target.value);
    };
    const onChageContent = (e) => {
        setEditContent(() => e.target.value);
    };
    const onChangeHashTag = (e) => {
        setHashtag(() => e.target.value);
    };

    return (
        <div className="liberty-wrapper">
            <section className="liberty-date">{today}</section>
            <section className="liberty-rating">
                <StyledHeart
                    name="editRating"
                    precision={1}
                    value={parseInt(editRating)}
                    onChange={onChangeRating}
                    icon={<FavoriteIcon />}
                    emptyIcon={<FavoriteBorderIcon />}
                />
            </section>
            <section className="liberty-rating">
                <StyledHeart
                    onChange={onChangeDrink}
                    value={parseInt(editDrink)}
                    size="medium"
                    icon={<SportsBarIcon style={{ color: "yellow" }} />}
                    emptyIcon={<SportsBarIcon />}
                />
            </section>
            <section className="liberty-rating">
                <StyledHeart
                    onChange={onChangeSmoke}
                    value={parseInt(editSmoke)}
                    size="medium"
                    icon={<SmokingRoomsIcon style={{ color: "#c46b91" }} />}
                    emptyIcon={<SmokingRoomsIcon />}
                />
            </section>

            <section>
                <section style={{ display: "flex" }}>
                    {state?.hashtag.map((v, i) => (
                        <div
                            key={i}
                            style={{
                                textAlign: "start",
                                opacity: "0.5",
                            }}>
                            <span className="beforehashtag">{v}</span>
                        </div>
                    ))}
                </section>
                <HashtagForm>
                    <form onSubmit={onSaveHashtag}>
                        <HashtagListWrap>
                            <span style={{ color: "white" }}>태그:</span>
                            <HashtagInput
                                className="input"
                                placeholder="입력"
                                type="text"
                                id="hashtagInput"
                                onChange={onChangeHashTag}
                            />
                            <HashtagButton type="submit">입력</HashtagButton>
                        </HashtagListWrap>
                        <div
                            className="hashtag-list-wrap"
                            style={{
                                display: "flex",
                                overflow: "auto",
                            }}></div>
                    </form>
                </HashtagForm>
                {emptyMessage ? (
                    <div>공백 & 특수기호는 사용할 수 없어요.</div>
                ) : (
                    ""
                )}
            </section>
            <section className="content">
                <textarea
                    className="liberty-textarea"
                    name="content"
                    ref={contentRef}
                    value={editContent}
                    onChange={onChageContent}
                />
            </section>
            <section>
                <ButtonWrapper>
                    <SubmitButton onClick={onClickSubmit}>글쓰기</SubmitButton>
                    <CancelButton
                        onClick={() => {
                            navigate("/liberty");
                        }}>
                        취소
                    </CancelButton>
                </ButtonWrapper>
            </section>
            <Modal props={{ text: ["확인", "취소"] }} />
        </div>
    );
};

export default Auth(LibertyEdit, true);

const StyledHeart = styled(Rating)({
    fontSize: "2rem",
    "& .MuiRating-iconFilled": {
        color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
        color: "#ff3d47",
    },
});
const StyledSmoke = styled(Rating)({});
const ButtonWrapper = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 10px;
`;
const SubmitButton = styled.button`
    border: 0;
    color: black;
    margin: 0 5px 0 5px;
    padding: 5px;
    border-radius: 5px;
`;

const CancelButton = styled.button`
    border: 0px;
    color: black;
    margin: 0 5px 0 5px;
    padding: 5px;
    border-radius: 5px;
`;

const HashtagForm = styled.div`
    padding: 10px;
    > form > div {
        display: flex;
        align-items: center;
    }
`;
const HashtagListWrap = styled.div`
    font-size: 1.3rem;
    > span {
        color: black;
        font-size: 0.8rem;
    }
    > div {
        font-size: 1.2rem;
    }
`;

const HashtagInput = styled.input`
    border: 0px;
    width: 30%;
    border-radius: 5px;
    margin: 3px;
`;
const HashtagButton = styled.button`
    background: white;
    border-radius: 10px;
    color: black;
    font-size: 0.9rem;
`;
