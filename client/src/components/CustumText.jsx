import React from "react";
import styled from "styled-components";
import { colors } from "../asstes/styles";
const CustomText = ({ content, width }) => {
  const Div = styled.div`
    width:${width || "100%"};
    padding-bottom: 4px;
    border-bottom-width: 2px;
    border-bottom-style: solid; /* Added this to ensure the border is rendered */
    border-bottom-color: ${colors.yellow};
    border-radius: 4px; /* Corrected the typo here */
  `;

  const Text = styled.p`
    color: ${colors.blue};
    `;

  return (
    <Div>
      <Text>{content}</Text>
    </Div>
  );
};

export default CustomText;
