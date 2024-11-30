import React from "react";
import styled from "styled-components";
import { colors } from "../asstes/styles";

const CustomSubtitle = ({ content }) => {
  const Text = styled.p`
    font-size: 1.2em;
    font-weight: 500;
    color: transparent;
    background-image: linear-gradient(
      to top,
      ${colors.darkBlue},
      ${colors.blue}
    ); /* Gradient from top to bottom */
    -webkit-background-clip: text;
    background-clip: text;
  `;
  return <Text>{content}</Text>;
};

export default CustomSubtitle;
