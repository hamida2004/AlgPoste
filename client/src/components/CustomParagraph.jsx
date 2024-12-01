import React from "react";
import styled from "styled-components";
import { colors } from "../asstes/styles";

export const CustomParagraph = ({ content, style }) => {
  const Text = styled.p`
    color: ${colors.grey};
    ${({ customStyles }) =>
      customStyles || ""}; /* Apply styles only if provided */
  `;

  return <Text customStyles={style}>{content}</Text>;
};
