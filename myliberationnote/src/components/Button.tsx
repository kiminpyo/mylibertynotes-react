import styled from "@emotion/styled";
import React from "react";
interface ButtonAttribue<T> {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    text: T;
}
const Button = ({ onClick, text }: ButtonAttribue<string>) => {
    return <CustomButton onClick={onClick}>{text}</CustomButton>;
};

export default Button;

const CustomButton = styled.button`
    border: none;
    border-radius: 3px;
    font-size: 0.9rem;
    padding: 0 5px 0 5px;
`;
