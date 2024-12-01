import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import CustomBtn from "../components/CustomBtn";
import ContractGenerator from "../components/ContractGenerator";
import CustomTitle from "../components/CustomTitle";
import CustomSubtitle from "../components/CustomSubtitle";
import CustomInput from "../components/CustomInput";
import { CustomParagraph } from "../components/CustomParagraph";
const Accueil = () => {
  const [isAllowed, setIsAllowed] = useState(false);
  const Modal = () => {
    return (
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.4)",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "30vh",
            backgroundColor: "#f5fefb",
          }}
        >
          <CustomSubtitle content={"subtitle of smth"} />
          <CustomBtn
            content={"click me"}
            handleClick={() => setIsAllowed(!isAllowed)}
          />
        </div>
      </div>
    );
  };
  return (
    <div className="container">
      <ContractGenerator
        userName="Hamida"
        ideaName="Nouvelle Solution de Suivi"
        duration="6 mois"
        price="200,000"
      />
      {isAllowed && <Modal />}
      <CustomParagraph content={"here is some content to show"} />
      <CustomInput
        placeHolder={"smth"}
        value={"iouoiujo"}
        setValue={() => {}}
      />
      <CustomBtn
        content={"click me"}
        handleClick={() => setIsAllowed(!isAllowed)}
      />
      <Contact />
    </div>
  );
};

export default Accueil;
