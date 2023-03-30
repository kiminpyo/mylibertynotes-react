import React from "react";
import { ConfirmProvider } from "./ConfirmProvider";
import {
    ConfirmButtonWrapperStyle,
    ConfirmWrapperStyle,
    ConfirmHeaderStyle,
    ConfirmBodyStyle,
    ConfirmButtonStyle,
} from "../styles/ConfirmStyle";

export const ConfirmContainerWrapper = ({ children }) => (
    <div style={{ width: "90%", margin: "auto", paddingTop: "1vh" }}>
        {children}
    </div>
);
export const ConfirmWrapper = ({ children }) => (
    <div style={ConfirmWrapperStyle}>{children}</div>
);
export const ConfirmHeader = ({ children }) => (
    <div style={ConfirmHeaderStyle}>{children}</div>
);
export const ConfirmBody = ({ children }) => (
    <div style={ConfirmBodyStyle}>{children}</div>
);
export const ConfirmButtonWrapper = ({ children }) => (
    <div style={ConfirmButtonWrapperStyle}>{children}</div>
);

export const ConfirmButton = ({ children }) => {
    return <button>{children}</button>;
};

const Confirm = ({ props }) => {
    return (
        <ConfirmProvider>
            <ConfirmContainer>
                <ConfirmContainer.Wrapper>
                    <ConfirmContainer.Header>
                        <i className="fa-solid fa-x" />
                    </ConfirmContainer.Header>
                    <ConfirmContainer.Body>
                        글을 등록하시겠습니까?
                    </ConfirmContainer.Body>
                    <ConfirmContainer.ButtonWrapper>
                        <ConfirmContainer.Button>확인</ConfirmContainer.Button>
                        <ConfirmContainer.Button>취소</ConfirmContainer.Button>
                    </ConfirmContainer.ButtonWrapper>
                </ConfirmContainer.Wrapper>
            </ConfirmContainer>
        </ConfirmProvider>
    );
};

export const ConfirmContainer = Object.assign(ConfirmWrapper, {
    Wrapper: ConfirmContainerWrapper,
    Header: ConfirmHeader,
    Body: ConfirmBody,
    ButtonWrapper: ConfirmButtonWrapper,
    Button: ConfirmButton,
});
export default Confirm;
