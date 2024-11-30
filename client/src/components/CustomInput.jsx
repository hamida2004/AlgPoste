import React from "react";
import styled from "styled-components";
import { colors } from "../asstes/styles";

function CustomInput() {
  const Input = styled.input`
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-bottom: 1px solid ${colors.yellow};
    border-bottom-width: 2px;
    border-radius: 4px;
    background: transparent;
  `;
  return <Input />;
}

export default CustomInput;
