import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DELETE_POST } from "../reducers/post";
interface Tag {
    id: number;
    name: string;
}
const ButtonWrap = ({id}:any) => {
    const writer = useSelector((state: any) => state.post?.user);
    const user = useSelector((state: any) => state.user?.userInfo);
    const post = useSelector((state: any) => state.post?.post);
    const { content, rating, drink, smoke } = post;
    const hashtag = post.Hashtags?.map((tag: Tag) => tag.name);
 const navigate = useNavigate();
     const dispatch = useDispatch();
    const onLibertyEdit = () => {
        navigate("/libertyedit", {
            state: {
                id,
                content,
                rating,
                drink,
                smoke,
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
    }, [id, dispatch, navigate]);
    return (
        <Container>
            {user?.email !== writer?.email ? null : (
                <>
                    <CustomButton onClick={onLibertyDelete}>삭제</CustomButton>
                    <CustomButton onClick={onLibertyEdit}>수정</CustomButton>
                </>
            )}
            <CustomButton
                onClick={() => {
                    navigate("/liberty");
                }}>
                취소
            </CustomButton>
        </Container>
    );
};

export default ButtonWrap;
const Container = styled.div`
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
