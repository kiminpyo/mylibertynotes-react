import { Rating, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { DELETE_POST, LOAD_POST_DETAIL } from "../reducers/post";
import { LOAD_ME } from "../reducers/user";
import Auth from "../HOC/auth";
const LibertyDetail = () => {
    const { id } = useParams();
    const post = useSelector((state) => state.post?.post);
    const writer = useSelector((state) => state.post?.user);
    const user = useSelector((state) => state.user?.userInfo);
    useEffect(() => {
        dispatch({
            type: LOAD_ME,
        });
    }, []);
    useEffect(() => {
        dispatch({
            type: LOAD_POST_DETAIL,
            data: id,
        });
    }, [id]);
    console.log(post);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const today = new Date().toISOString().slice(0, 10);
    const hashtag = post.Hashtags?.map((v) => v.name);
    console.log(hashtag);
    const onLibertyEdit = () => {
        navigate("/libertyedit", {
            state: {
                id: post.id,
                content: post.content,
                rating: post.rating,
                hashtag,
            },
        });
    };

    const onLibertyDelete = () => {
        if (window.confirm("삭제하시겠습니까? ")) {
            dispatch({
                type: DELETE_POST,
                data: id,
            });
            navigate("/liberty");
        } else {
            return null;
        }
    };
    return (
        <div>
            <div className="liberty-wrapper">
                <section className="liberty-date">{today}</section>
                <section className="liberty-rating">
                    <StyledRating
                        style={{ marginLeft: "10px" }}
                        name="rating"
                        precision={0.5}
                        value={parseInt(post.rating)}
                        disabled
                        icon={<FavoriteIcon />}
                        emptyIcon={<FavoriteBorderIcon />}
                    />
                </section>
                <section>
                    <div
                        className="liberty-writer-wrap"
                        style={{ display: "flex" }}>
                        <div className="liberty-writer-label">글쓴이:</div>
                        <div className="liberty-writer">
                            {user && user.email}
                        </div>
                    </div>
                </section>
                <section>
                    <div className="liberty-hashtag">
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                            id="hashtagArr">
                            <div>
                                태그: &nbsp;{" "}
                                {post.Hashtags?.map((v) => (
                                    <span>{v.name}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="liberty-textarea">{post.content}</section>

                <section>
                    <div
                        style={{
                            width: "100%",
                            textAlign: "center",
                            marginTop: "10px",
                        }}>
                        {user?.email == writer?.email ? (
                            <>
                                <button
                                    onClick={onLibertyDelete}
                                    style={{
                                        border: 0,
                                        color: "black",
                                        padding: "5px",
                                        borderRadius: "5px",
                                    }}>
                                    삭제
                                </button>
                                <button
                                    onClick={onLibertyEdit}
                                    style={{
                                        border: 0,
                                        color: "black",
                                        padding: "5px",
                                        borderRadius: "5px",
                                    }}>
                                    수정
                                </button>
                            </>
                        ) : null}
                        <button
                            onClick={() => {
                                navigate("/liberty");
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
        </div>
    );
};

export default Auth(LibertyDetail);

const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
        color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
        color: "#ff3d47",
    },
});
