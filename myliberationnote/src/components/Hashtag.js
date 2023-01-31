import styled from "@emotion/styled";
import React, { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Hashtag = (item) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const searchHashtag = useCallback((e) => {
        if (id === e.target.innerText) return;
        navigate(`/liberty/search/${e.target.innerText}`, {
            state: e.target.innerText,
        });
    }, []);

    return (
        <LibertyItemHashtag onClick={searchHashtag}>
            {item.name}
        </LibertyItemHashtag>
    );
};

export default Hashtag;

const LibertyItemHashtag = styled.span`
    cursor: pointer;
    padding: 7px;
    margin-left: 10px;
    background-color: black;
    color: whitesmoke;
    font-size: 0.6rem;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    border-radius: 10px;
    :hover {
        background-color: #aa2424;
    }
`;
