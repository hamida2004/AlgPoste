import React from "react";
import styled from "styled-components";
import { colors } from "../asstes/styles";

const CustomTitle = ({content}) => {
  const Text = styled.p`
    font-size: 1.8em;
    font-weight: 600;
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

export default CustomTitle;
