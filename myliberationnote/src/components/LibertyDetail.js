import { Rating } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { DELETE_POST, LOAD_POST_DETAIL } from "../reducers/post";
import { LOAD_ME } from "../reducers/user";
import Auth from "../HOC/auth";
import Hashtag from "./Hashtag";
import styled from "@emotion/styled";
const LibertyDetail = () => {
    const { id } = useParams();
    const post = useSelector((state) => state.post?.post);
    const writer = useSelector((state) => state.post?.user);
    const user = useSelector((state) => state.user?.userInfo);
    console.log(user);
    console.log("렌더");
    useEffect(() => {
        dispatch({
            type: LOAD_POST_DETAIL,
            data: id,
        });
    }, []);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const today = new Date().toISOString().slice(0, 10);
    const hashtag = post.Hashtags?.map((v) => v.name);
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

    const onLibertyDelete = useCallback(() => {
        if (window.confirm("삭제하시겠습니까? ")) {
            dispatch({
                type: DELETE_POST,
                data: id,
            });
            navigate("/liberty");
        } else {
            return null;
        }
    }, [id]);
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
                        <TextLabel>글쓴이:</TextLabel>
                        <TextLabel>{user && user.email}</TextLabel>
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
                                <TextLabel>태그:</TextLabel>
                                {post.Hashtags?.map((tag, i) => (
                                    <Hashtag key={i} {...tag} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="liberty-textarea">{post.content}</section>

                <section>
                    <ButtonWrap>
                        {user?.email != writer?.email ? null : (
                            <>
                                <CustomButton onClick={onLibertyDelete}>
                                    삭제
                                </CustomButton>
                                <CustomButton onClick={onLibertyEdit}>
                                    수정
                                </CustomButton>
                            </>
                        )}
                        <CustomButton
                            onClick={() => {
                                navigate("/liberty");
                            }}>
                            취소
                        </CustomButton>
                    </ButtonWrap>
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

export const TextLabel = styled.span`
    font-size: 0.7rem;
`;
const ButtonWrap = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 5vh;
`;
const CustomButton = styled.button`
    border: 0px;
    color: black;
    margin: 5px;
    font-size: 0.8srem;
`;
