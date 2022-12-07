import styled from "@emotion/styled";
import React, { useEffect } from "react";

const Introduce = () => {
    useEffect(() => {
        const introContentWrap = document.getElementById("intro-content-wrap");
        introContentWrap.style.display = "none";
        setTimeout(() => {
            introContentWrap.style.display = "block";
        }, 0);
    }, []);
    return (
        <IntroContentWrap id="intro-content-wrap">
            <IntroTitle>INTRO</IntroTitle>
            <IntroContent className="intro-content">
                살면서 마음이 정말로 편하고 좋았던 적이 얼마나 있었나? 항상
                무언가 해야 한다는 생각에, 어떻게든 하루를 알차게 살아내야
                한다는 강박에 시달리면서도, 몸은 움직여주지 않고, 상황은 뜻대로
                돌아가지 않고...
                <br />
                <br />
                지리한 나날들의 반복. 딱히 큰 문제가 있는 것도 아닌데 왜
                행복하지 않을까? 그렇다고 문제가 없다는 말도 못 한다. 문제가
                있는 것도 아니고, 문제가 없는 것도 아니고. 정확하게 말할 수 있는
                한 가지는, 행복하지 않다는 것.
                <br />
                <br /> 해방. 해갈. 희열. 그런 걸 느껴본 적이 있던가? ‘아, 좋다.
                이게 인생이지.’라고 진심으로 말했던 적이 있던가? 긴 인생을
                살면서 그런 감정을 한 번도 느껴보지 못했다는 게 이상하지 않은가?
                이렇게 지지부진하게 살다가는 게 인생일 리는 없지 않은가? 어떻게
                해야 그런 감정을 느낄 수 있을까?
                <br />
                <br />
                혹시 아무것도 계획하지 말고 그냥 흘러가 보면 어떨까? 혹시 아무나
                사랑해보면 어떨까? 관계에서 한 번도 채워진 적이 없기에 이렇게
                무기력한 것 아닐까?
                <br />
                <div style={{ textAlign: "center" }}>-나의 해방일지 中-</div>
            </IntroContent>
        </IntroContentWrap>
    );
};

export default Introduce;

const IntroContentWrap = styled.div`
    margin-top: 100px;
    margin-bottom: 300px;
`;

const IntroTitle = styled.div`
    text-align: center;
    font-size: 4rem;
    font-weight: bold;
`;

const IntroContent = styled.div`
    overflow-x: auto;
    height: 300px;
    padding: 50px;
    margin: auto;
    margin-top: 50px;
    font-size: 1.2rem;
    line-height: 1.3;
    word-spacing: 0.2rem;
    width: 70%;
    box-shadow: 60px 40px 15px 1px rgba(0, 0, 255, 0.2);
`;
