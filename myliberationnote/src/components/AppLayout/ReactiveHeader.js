import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const ReactiveHeader = () => {
    const navigate = useNavigate();

    const onClickMenu = useCallback(() => {
        setActive((prev) => !prev);
    }, []);

    const [active, setActive] = useState(false);
    const onClickNav = (path) => {
        setActive((prev) => !prev);

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
    user-select: none;
    @media screen and (min-width: 425px) {
        display: none;
    }
`;

const IconWrap = styled.div`
    width: 30px;
    height: 30px;
    right: 5%;
    top: 20px;
    color: white;
    position: absolute;
    text-align: center;
    line-height: 1.7;

    border-radius: 50%;
`;
const HeaderMenu = styled.div`
    width: 100%;
    left: 0;
    color: white;
    text-align: center;
    background-color: black;
    border-radius: 3px;
    top: 57px;
    position: absolute;
    z-index: 999;

    > div {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 0.8rem;
        padding: 5px;
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
