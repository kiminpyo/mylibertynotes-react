import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Rating } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPost } from "../reducers/post";
const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
        color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
        color: "#ff3d47",
    },
});

const LibertyEdit = () => {
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
    const onClick = () => {
        const data = {
            rating,
            content,
        };
    };
    const onChange = (e) => {
        const nextValue = {
            ...value,
            [e.target.name]: e.target.value,
        };
        setValue(nextValue);
        if (rating == 1) {
            console.log("hi");
        }
    };
    const onEnterHashtag = (e) => {
        const hashtagInput = document.getElementById("hashtagInput");
        const div = document.createElement("div");
        const divLengh = document.querySelectorAll("div.hashtag").length;

        const removeHashtag = () => {
            div.remove();
            e.target.value = "";
        };

        div.setAttribute("class", "hashtag");
        if (e.code === "Enter") {
            if (divLengh >= 5) {
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
                        style={{ display: "flex", alignItems: "center" }}
                        id='hashtagArr'>
                        <div>태그: &nbsp; </div>
                        <input
                            placeholder='입력 후 Enter'
                            type='text'
                            id='hashtagInput'
                            onKeyPress={onEnterHashtag}
                        />
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

export default LibertyEdit;
