import React, { useEffect, useRef } from "react";
import {
    ModalWrapper,
    ModalHeaderWrapper,
    ModalHeaderTitle,
    ModalBodyWrapper,
    ModalBodyTitle,
    ModalBodyContent,
    ModalFooterWrapper,
    ModalFooterButton,
} from "../styles/ModalStyle";
import useOutside from "../../hooks/useOutside";
import Button from "../Button";

const Content = `     '나의 해방일지'는 다음의 목적을 위하여 최소한의 개인정보를
                    수집하여 처리합니다. 처리하고 있는 개인정보는 다음의 목적
                    이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는
                    경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등
                    필요한 조치를 이행할 예정입니다. ① 홈페이지 회원 가입 및
                    관리 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인
                    식별·인증, 회원자격 유지·관리, 제한적 본인확인제 시행에 따른
                    본인확인, 서비스 부정이용 방지, 만 14세 미만 아동의 개인정보
                    처리 시 법정대리인의 동의여부 확인, 각종 고지·통지 등을
                    목적으로 개인정보를 처리합니다. ② 각각의 개인정보 처리 및
                    보유 기간은 다음과 같습니다. 공단에서 개인정보보호법
                    제32조에 따라 등록 공개하는 개인정보파일의 처리 및
                    보유기간은 [개인정보보호 종합지원] 포털을 클릭하시면
                    확인하실 수 있습니다. ③ 공단은 법령에 따라 수집 목적과
                    합리적으로 관련된 범위에서는 정보주체의 동의 없이 개인정보를
                    이용할 수 있으며, 이때 ‘당초 수집 목적과 관련성이 있는지,
                    수집한 정황 또는 처리 관행에 비추어 볼 때 예측 가능성이
                    있는지, 정보주체의 이익을 부당하게 침해하는지, 가명처리 또는
                    암호화 등 안전성 확보에 필요한 조치를 하였는지’를 종합적으로
                    고려합니다. ④ 공단은 수집한 개인정보를 특정 개인을 알아볼 수
                    없도록 가명처리하여 통계작성, 과학적 연구, 공익적 기록보존
                    등을 위하여 처리할 수 있습니다. 이때 가명정보는 재식별되지
                    않도록 분리하여 별도 저장·관리하고 필요한 기술적·관리적
                    보호조치를 취합니다.`;
const Modal = ({ setShowInfo }) => {
    const ref = useRef(null);
    useOutside(ref, setShowInfo);
    return (
        <ModalWrapper ref={ref}>
            <ModalHeaderWrapper data-testid="modal">
                <ModalHeaderTitle title="modalTitle">
                    제1조 (개인정보의 처리 목적)
                </ModalHeaderTitle>
            </ModalHeaderWrapper>
            <hr />
            <ModalBodyWrapper>
                <ModalBodyTitle>공지사항</ModalBodyTitle>
                <ModalBodyContent>{Content}</ModalBodyContent>
            </ModalBodyWrapper>
            <hr />
            <ModalFooterWrapper>
                <ModalFooterButton>
                    <Button onClick={() => setShowInfo(false)} text={"닫기"} />
                </ModalFooterButton>
            </ModalFooterWrapper>
        </ModalWrapper>
    );
};

export default Modal;
