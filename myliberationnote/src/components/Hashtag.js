import styled from "@emotion/styled";
import React, { useCallback } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const Hashtag = (item) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const searchHashtag = useCallback((e) => {
        if (id === e.target.innerText) return;
        navigate(`/liberty/search/${item.name}`, {
            state: e.target.innerText,
        });
    }, []);
    const { pathname } = useLocation();
    const showPullHashtag = (e) => {};
    if (pathname === `/liberty` || `/search`) {
        return (
            <LibertyItemHashtag
                onClick={searchHashtag}
                onMouseOver={showPullHashtag}>
                {item.name.length >= 5
                    ? item.name.slice(0, 5) + "..."
                    : item.name}
                <HashtagToolTip>{item.name}</HashtagToolTip>
            </LibertyItemHashtag>
        );
    } else {
        return (
            <LibertyItemHashtag
                onClick={searchHashtag}
                onMouseOver={showPullHashtag}>
                {item.name}
                {/* <HashtagToolTip>{item.name}</HashtagToolTip> */}
            </LibertyItemHashtag>
        );
    }
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
        /* > span {
            position: absolute;
            display: inline;
            padding: 8px;
            -webkit-border-radius: 8px;
            -moz-border-radius: 8px;
            border-radius: 8px;
            background: #333;
            color: #fff;
            font-size: 14px;
        } */
    }
    @media screen and (max-width: 425px) {
        padding: 4px;
    }
`;
const HashtagToolTip = styled.span`
    display: none;
`;
