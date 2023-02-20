import React, { createContext, useContext } from "react";
import { ModalContext, ModalProvider } from "./ModalProvider";
import {
    ModalButtonWrapperStyle,
    ModalWrapperStyle,
    ModalHeaderStyle,
    ModalBodyStyle,
    ModalButtonStyle,
} from "./style";

export const ModalWrapper = ({ children }) => (
    <div style={ModalWrapperStyle}>{children}</div>
);
export const ModalHeader = ({ children }) => (
    <div style={ModalHeaderStyle}>{children}</div>
);
export const ModalBody = ({ children }) => (
    <div style={ModalBodyStyle}>{children}</div>
);
export const ModalButtonWrapper = ({ children }) => (
    <div style={ModalButtonWrapperStyle}>{children}</div>
);

export const ModalButton = ({ children }) => {
    return <button>{children}</button>;
};

const Modal = ({ props }) => {
    return (
        <ModalProvider>
            <ModalContainer>
                <div
                    style={{ width: "90%", margin: "auto", paddingTop: "1vh" }}>
                    <ModalContainer.Header>
                        <i className="fa-solid fa-x" />
                    </ModalContainer.Header>
                    <ModalContainer.Body>
                        글을 등록하시겠습니까?
                    </ModalContainer.Body>
                    <ModalContainer.ButtonWrapper>
                        <ModalContainer.Button>확인</ModalContainer.Button>
                        <ModalContainer.Button>취소</ModalContainer.Button>
                    </ModalContainer.ButtonWrapper>
                </div>
            </ModalContainer>
        </ModalProvider>
    );
};

export const ModalContainer = Object.assign(ModalWrapper, {
    Header: ModalHeader,
    Body: ModalBody,
    ButtonWrapper: ModalButtonWrapper,
    Button: ModalButton,
});
export default Modal;
