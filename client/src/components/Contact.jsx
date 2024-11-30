import React from "react";
import styled from "styled-components";
import { colors } from "../asstes/styles";
import { FaSquareFacebook ,FaSquareXTwitter,FaLink ,FaInstagram } from "react-icons/fa6";

function Contact() {
  const Div = styled.div`
    background-color: rgba(240, 209, 96, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    box-shadow: 0px 0px 0px ${colors.blue};
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    position: fixed;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 10px;
  `;
  const Link = styled.a`
    cursor: pointer;
  `;

  return (
    <Div>
      <Link href="facebook.com">
        <FaSquareFacebook color={colors.blue} size={24} />
      </Link>
      <Link>
        <FaSquareXTwitter color={colors.blue} size={24} />
      </Link>
      <Link>
        <FaLink  color={colors.blue} size={24} />
      </Link>
      <Link>
        <FaInstagram  color={colors.blue} size={24} />
      </Link>
    </Div>
  );
}

export default Contact;
