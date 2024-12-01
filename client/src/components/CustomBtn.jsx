import React from "react";
import { styled } from "styled-components";
import { colors } from "../asstes/styles";
function CustomBtn({ content, handleClick }) {
  const Btn = styled.button`
    color: ${colors.blue};
    background-color: ${colors.yellow};
    border-radius: 16px;
    box-shadow: 0px 0px 4px ${colors.blue};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    border: none;
    font-weight:600;
    cursor: pointer
  `;
  return <Btn onClick={handleClick}>{content}</Btn>;
}

export default CustomBtn;
