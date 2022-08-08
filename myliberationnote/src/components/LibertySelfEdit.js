import React, { useCallback, useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Rating } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPost } from "../reducers/post";
import axios from "axios";
import { Grid } from "antd";
const LibertySelfEdit = () => {
    const StyledRating = styled(Rating)({
        "& .MuiRating-iconFilled": {
            color: "#ff6d75",
        },
        "& .MuiRating-iconHover": {
            color: "#ff3d47",
        },
    });

    const [hashtag, setHashtag] = useState([]);
    const [value, setValue] = useState({
        rating: 0,
        content: "",
    });
    const contentRef = useRef();
    const { rating, content } = value;
    const today = new Date().toISOString().slice(0, 10);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 해시태그 생성
    const input = document.getElementsByClassName("input");
    const hashtagInput = document.getElementById("hashtagInput");
    const div = document.createElement("div");
    const divLength = document.querySelectorAll("div.hashtag").length;
    div.setAttribute("class", "hashtag");

    const onClick = useCallback(() => {
        dispatch(addPost({ content: content, rating: rating }));
        navigate("/libertySelf");
    }, [rating, content]);

    const onChange = (e) => {
        console.log(e);
        const nextValue = {
            ...value,
            [e.target.name]: e.target.value,
        };
        setValue(nextValue);
    };

    const onClickHashtag = (e) => {
        div.innerText = hashtag;
        hashtagInput.before(div);
        setHashtag([...hashtag, input[0].value]);

        input[0].value = "";
    };
    console.log(hashtag);

    const onEnterHashtag = (e) => {
        const removeHashtag = () => {
            div.remove();
            e.target.value = "";
        };

        if (e.code === "Enter") {
            if (divLength >= 5) {
                alert("개시글은 5개까지만!");
                return;
            }
            if (e.target.value.trim() == "") {
                alert("공백 불가");
                return;
            }
            div.innerText = e.target.value;
            hashtagInput.before(div);
            setHashtag([...hashtag, e.target.value]);
            e.target.value = "";
        }

        div.addEventListener("click", removeHashtag);
    };

    // window.localStorage.setItem("hashtag", JSON.stringify(hashtag));

    return (
        <div className='liberty-wrapper'>
            <section className='liberty-date'>{today}</section>
            <section className='liberty-rating'>
                <StyledRating
                    style={{ marginLeft: "10px" }}
                    name='rating'
                    precision={0.5}
                    value={rating}
                    onChange={onChange}
                    icon={<FavoriteIcon />}
                    emptyIcon={<FavoriteBorderIcon />}
                />
            </section>
            <section>
                <div className='liberty-hashtag'>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                        id='hashtagArr'>
                        <div>태그: &nbsp; </div>
                        <input
                            className='input'
                            placeholder='입력 후 Enter'
                            type='text'
                            id='hashtagInput'
                            onKeyPress={onEnterHashtag}
                        />
                        <button onClick={onClickHashtag}>입력</button>
                    </div>
                </div>
            </section>

            <section className='content'>
                <textarea
                    name='content'
                    ref={contentRef}
                    value={content}
                    onChange={onChange}></textarea>
            </section>
            <section>
                <div
                    style={{
                        width: "100%",
                        textAlign: "center",
                        marginTop: "10px",
                    }}>
                    <button
                        onClick={onClick}
                        style={{
                            border: 0,
                            color: "black",

                            padding: "5px",
                            borderRadius: "5px",
                        }}>
                        글쓰기
                    </button>
                    <button
                        onClick={() => {
                            navigate(-1);
                        }}
                        style={{
                            border: 0,
                            color: "black",
                            padding: "5px",
                            borderRadius: "5px",
                        }}>
                        취소
                    </button>
                </div>
            </section>
        </div>
    );
};

export default LibertySelfEdit;
