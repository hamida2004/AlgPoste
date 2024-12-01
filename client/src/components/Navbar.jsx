import React from "react";
import { MdLogout } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import logo from "../asstes/images/logo.png";
import styled from "styled-components";
import { LuLogOut } from "react-icons/lu";
import { colors } from "../asstes/styles";
import { Link } from "react-router";
const Navbar = () => {
  const Div = styled.div`
    width: 100%;
    height: 68px;
    box-shadow: 0px 0px 4px ${colors.blue};
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 0px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const Img = styled.img`
    width: 60px;
    height: 60px;
  `;
  const List = styled.ul`
    list-style-type: none; /* Removes the default list bullet points */
    padding: 0; /* Removes any default padding */
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  `;
  const CLink = styled(Link)`
    text-decoration: none;
    color: ${colors.blue};
    font-weight: 500;
  `;
  const Personal = styled.div``;
  return (
    <Div>
      <Img src={logo} />
      <List>
        <CLink to={"/"}>Accueil</CLink>
        <CLink to={"/Idées"}>Idées</CLink>
        <CLink to={"/Collaboration"}>Collaboration</CLink>
        <CLink to={"/Réclamations"}>Réclamations</CLink>
        <CLink to={"/SDA"}>Suivi Distributeurs Automatiques</CLink>
        <CLink to={"/About"}>About us</CLink>
      </List>
      <Personal>
        <Link
          to={"/me"}
          style={{
            textDecoration: "none",
          }}
        >
          <IoPerson size={24} color={colors.grey} />
        </Link>
      </Personal>
      <div
        onClick={() => {}}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          cursor:'pointer'
        }}
      >
        <MdLogout size={24} color={colors.red} />
        <p
          style={{
            color: colors.red,
          }}
        >
          Log out
        </p>
      </div>
    </Div>
  );
};

export default Navbar;
