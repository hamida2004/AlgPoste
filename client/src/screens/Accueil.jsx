import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import CustomBtn from "../components/CustomBtn";
import ContractGenerator from "../components/ContractGenerator";
import CustomTitle from "../components/CustomTitle";
import CustomSubtitle from "../components/CustomSubtitle";
import CustomInput from "../components/CustomInput";
const Accueil = () => {
  return (
    <div className="container">
      <ContractGenerator
        userName="Hamida"
        ideaName="Nouvelle Solution de Suivi"
        duration="6 mois"
        price="200,000"
      />
      <CustomTitle content={"title of smth"} />
      <CustomSubtitle content={"subtitle of smth"} />
      <CustomInput />
      <CustomBtn
        content={"click me"}
        handleClick={() => console.log("clicked")}
      />
      <Contact />
    </div>
  );
};

export default Accueil;
