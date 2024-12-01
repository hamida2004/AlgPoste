import React from "react";
import CustomTitle from "../components/CustomTitle";
import CustomSubtitle from "../components/CustomSubtitle";
import CustomInput from "../components/CustomInput";
import CustomBtn from "../components/CustomBtn";

const Reclamation = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
      }}
    >
      <div
        className="half"
        style={{
          padding: 80,
        }}
      >
        <CustomSubtitle content={"Reclamations et Suggestion :"} />
        <CustomTitle content={"Tout opinion est prise en consederation !"} />
      </div>
      <div
        className="half"
        style={{
          padding: 80,
        }}
      >
        <CustomSubtitle content={"Decrire votre reclamation!"} />

        <CustomInput placeHolder={"De quoi parle votre reclamation?"} />

        <CustomInput placeHolder={"Placer votre reclamation ici!"} />
        <div
          style={{
            marginTop: 100,
          }}
        >
          <CustomBtn content={"Submit"} />
        </div>
      </div>
    </div>
  );
};

export default Reclamation;
