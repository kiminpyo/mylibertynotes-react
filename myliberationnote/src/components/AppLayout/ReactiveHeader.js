import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_ME } from "../../reducers/user";
const ReactiveHeader = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state?.user);
    useEffect(() => {
        dispatch({
            type: LOAD_ME,
        });
    }, []);

    const onClickMenu = () => {
        setActive((prev) => !prev);
    };
    const [active, setActive] = useState(false);
    const onClickNav = (path) => {
        setActive((prev) => !prev);
        if (!userInfo) {
            return navigate("/login");
        }

        navigate(`/${path}`);
    };
    return (
        <>
            <HeaderReactiveMenuWrap>
                <IconWrap onClick={onClickMenu}>
                    {active ? (
                        <FontAwesomeIcon icon={faX} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} />
                    )}
                </IconWrap>
                <HeaderMenu>
                    <HeaderIntro
                        $asd={active}
                        onClick={() => onClickNav("intro")}>
                        소개
                    </HeaderIntro>
                    <HeaderLiberty
                        $asd={active}
                        onClick={() => onClickNav("liberty")}>
                        해방
                    </HeaderLiberty>
                    <HeaderMypage
                        $asd={active}
                        onClick={() => onClickNav("mypage")}>
                        mypage
                    </HeaderMypage>
                </HeaderMenu>
            </HeaderReactiveMenuWrap>
        </>
    );
};

export default ReactiveHeader;

const HeaderReactiveMenuWrap = styled.div`
    width: 40%;
    height: 40%;
    user-select: none;
    @media screen and (min-width: 425px) {
        display: none;
    }
`;

const IconWrap = styled.div`
    width: 30px;
    height: 30px;
    right: 5%;
    top: 2vh;
    position: absolute;
    text-align: center;
    line-height: 2;
    background-color: white;
    border-radius: 50%;
    :hover {
        background-color: whitesmoke;
    }
`;
const HeaderMenu = styled.div`
    width: 100%;
    left: 0;
    color: black;
    text-align: center;
    background-color: whitesmoke;
    border-radius: 3px;
    top: 57px;
    position: absolute;
    z-index: 999;

    > div {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 0.8rem;
        padding: 3px;
        opacity: 0.5;

        :hover {
            opacity: 1;
            cursor: pointer;
        }
    }
`;

const HeaderIntro = styled.div`
    display: ${(props) => (props.$asd ? "block" : "none")};
`;

const HeaderLiberty = styled.div`
    display: ${(props) => (props.$asd ? "block" : "none")};
`;

const HeaderMypage = styled.div`
    display: ${(props) => (props.$asd ? "block" : "none")};
`;
