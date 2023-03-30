import styled from "@emotion/styled";
export const ModalWrapper = styled.div`
    animation: fadeIn 0.5s;
    border-style: groove;
    width: 80%;
    height: 362px;
    border-radius: 7px;
    position: absolute;
    background-color: white;
    color: black;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    overflow-y: scroll;
`;

export const ModalHeaderWrapper = styled.div`
    display: flex;
    justify-items: center;
    height: 38px;
`;
export const ModalHeaderTitle = styled.div`
    width: 90%;
    padding: 9px 0px 0px 3%;
    font-size: 0.9rem;
`;
export const ModalBodyWrapper = styled.div`
    height: 240px;
    padding: 5px 0px 10px 0px;
`;
export const ModalBodyTitle = styled.div`
    padding: 5px 5px 5px 11px;
    font-size: 0.9rem;
`;
export const ModalBodyContent = styled.div`
    padding: 5px 5px 5px 11px;
    height: 80%;
    overflow-y: auto;
    font-size: 0.8rem;
`;
export const ModalFooterWrapper = styled.div`
    padding: 0px 20px 0px 0px;
`;

export const ModalFooterButton = styled.div`
    text-align: end;
`;
