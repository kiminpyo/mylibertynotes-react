import React, { useEffect } from "react";

import LibertySelfItem from "../components/LibertyItem";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_POSTS } from "../reducers/post";
import { useNavigate } from "react-router-dom";
import Auth from "../HOC/auth";

const LibertySelf = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { posts } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch({
            type: LOAD_POSTS,
        });
    }, []);

    const onCreateSelf = () => {
        navigate("/libertyedit");
    };
    return (
        <>
            <div
                style={{
                    margin: "auto",
                    width: " 80%",
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "100px",
                }}>
                {posts &&
                    posts.map((item, i) => (
                        <LibertySelfItem item={item} key={i} />
                    ))}
            </div>

            <div className="addPost" onClick={onCreateSelf}></div>
        </>
    );
};

export default Auth(LibertySelf, true);
