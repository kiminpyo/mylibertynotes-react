import { Rating, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { DELETE_POST, LOAD_POST_DETAIL } from "../reducers/post";
import { LOAD_ME } from "../reducers/user";

const LibertySelfDetail = () => {
    const { id } = useParams();
    const [me, setMe] = useState();
    const { content, rating } = useSelector((state) => state.post.post);
    const user = useSelector((state) => state.post.user);
    const { userInfo } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch({
            type: LOAD_POST_DETAIL,
            data: id,
        });
    }, [id]);
    useEffect(() => {
        dispatch({
            type: LOAD_ME,
        });
    }, []);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const today = new Date().toISOString().slice(0, 10);

    const StyledRating = styled(Rating)({
        "& .MuiRating-iconFilled": {
            color: "#ff6d75",
        },
        "& .MuiRating-iconHover": {
            color: "#ff3d47",
        },
    });

    const onLibertyEdit = () => {
        navigate("/libertyselfedit", {
            state: {
                previouscontent: content,
                previousrating: rating,
                id: id,
            },
        });
    };
    const onLibertyDelete = () => {
        if (window.confirm("삭제하시겠습니까? ")) {
            dispatch({
                type: DELETE_POST,
                data: id,
            });
            navigate("/libertyself");
        } else {
            return null;
        }
    };
    return (
        <div>
            <div className='liberty-wrapper'>
                <section className='liberty-date'>{today}</section>
                <section className='liberty-rating'>
                    <StyledRating
                        style={{ marginLeft: "10px" }}
                        name='rating'
                        precision={0.5}
                        value={rating}
                        disabled
                        icon={<FavoriteIcon />}
                        emptyIcon={<FavoriteBorderIcon />}
                    />
                </section>
                <section>
                    <div
                        className='liberty-writer-wrap'
                        style={{ display: "flex" }}>
                        <div className='liberty-writer-label'>글쓴이:</div>
                        <div className='liberty-writer'>{user && user[0]}</div>
                    </div>
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
                        </div>
                    </div>
                </section>

                <section className='liberty-textarea'>{content}</section>

                <section>
                    <div
                        style={{
                            width: "100%",
                            textAlign: "center",
                            marginTop: "10px",
                        }}>
                        {userInfo && userInfo.email == user && user[0] ? (
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
                        ) : null}
                        {userInfo && userInfo.email == user && user[0] ? (
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
                        ) : null}
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
        </div>
    );
};

export default LibertySelfDetail;
