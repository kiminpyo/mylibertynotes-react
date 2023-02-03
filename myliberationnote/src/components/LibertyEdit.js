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

const LibertyEdit = () => {
    const contentRef = useRef();
    const { state } = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [editRating, setEditRating] = useState(state?.rating || 0);
    const [editDrink, setEditDrink] = useState(state?.rating || 0);
    const [editSmoke, setEditSmoke] = useState(state?.rating || 0);
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
    };
    const onSaveHashtag = (e) => {
        e.preventDefault();
        if (divLength >= 3) {
            alert("개시글은 3개까지만!");
            return;
        }
        if (hashtag.match(/[^ㄱ-ㅎ가-힣a-zA-Z0-9]/gi) || hashtag.trim() == "") {
            return setEmptyMessage(true);
        }
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
                <StyledSmoke
                    onChange={onChangeSmoke}
                    size="medium"
                    icon={<SmokingRoomsIcon />}
                    emptyIcon={<SmokingRoomsIcon />}
                />
            </section>
            <section className="liberty-rating">
                <StyledSmoke
                    onChange={onChangeDrink}
                    size="medium"
                    icon={<SportsBarIcon />}
                    emptyIcon={<SportsBarIcon />}
                />
            </section>
            <section>
                <section style={{ display: "flex" }}>
                    {state?.hashtag.map((v) => (
                        <div
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
                            <span>Tag:</span>
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
`;
const HashtagButton = styled.button`
    padding: 5px 10px 5px 10px;
    background: black;
    border-radius: 10px;
    color: white;
    font-size: 1.1rem;
`;
