import styled from "@emotion/styled";
import React, { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Hashtag = ({ name }: any) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const searchHashtag = useCallback(
        (e) => {
            if (id === name) return;
            navigate(`/liberty/search/${name}`, {
                state: e.target.innerText,
            });
        },
        [id, name, navigate]
    );

    return (
        <LibertyItemHashtag data-testid="hashtag" onClick={searchHashtag}>
            {name}
        </LibertyItemHashtag>
    );
};

export default Hashtag;

const LibertyItemHashtag = styled.span`
    cursor: pointer;
    padding: 7px;
    margin-left: 10px;
    background-color: black;
    color: black;
    background-color: #876972;
    font-size: 0.6rem;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    border-radius: 10px;
    :hover {
        background-color: #aa2424;
    }
    @media screen and (max-width: 425px) {
        padding: 4px;
    }
`;
