import styled from "@emotion/styled";
import React from "react";

const Button = ({ onClick, text }) => {
    return <CustomButton onClick={onClick}>{text}</CustomButton>;
};

export default Button;

const CustomButton = styled.button`
    border: none;
    border-radius: 3px;
    font-size: 0.9rem;
    padding: 0 5px 0 5px;
`;
