import React, { useEffect } from "react";

import { Grid } from "@mui/material";
import LibertySelfItem from "../components/LibertySelfItem";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_POSTS } from "../reducers/post";
import { useNavigate } from "react-router-dom";

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
        navigate("/libertyselfedit");
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
                    posts.map((v, i) => <LibertySelfItem item={v} key={i} />)}
            </div>

            <div className='addPost' onClick={onCreateSelf}></div>
        </>
    );
};

export default LibertySelf;
