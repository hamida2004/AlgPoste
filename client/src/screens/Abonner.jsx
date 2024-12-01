import React from "react";
import CustomTitle from "../components/CustomTitle";
import CustomSubtitle from "../components/CustomSubtitle";
import CustomInput from "../components/CustomInput";
import CustomBtn from "../components/CustomBtn";
import CustomText from "../components/CustumText";

const Abonner = () => {
  return (
    <div
      className="container"
      style={{
        paddingTop: 120,
        gap: 40,
      }}
    >
      <div
        style={{
          height: 20,
        }}
      ></div>
      <CustomSubtitle
        content={
          "Reste informer des nouvauter des postes que vous interesse ! "
        }
      />
      <div
        style={{
          height: 20,
        }}
      ></div>
      <CustomTitle content={"Abonnez a votre postes !"} />{" "}
      <div
        style={{
          height: 40,
        }}
      >
        </div>
        <div
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
            gap: 40,
            marginBottom: 20,
          }}
        >
          <CustomText content={"poste01"} />
          <CustomBtn content={"Abonner"} />
        </div>
        <div
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
            gap: 40,
            marginBottom: 20,
          }}
        >
          <CustomText content={"poste01"} />
          <CustomBtn content={"Abonner"} />
        </div>
        <div
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
            gap: 40,
            marginBottom: 20,
          }}
        >
          <CustomText content={"poste01"} />
          <CustomBtn content={"Abonner"} />
        </div>
        <div
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
            gap: 40,
            marginBottom: 20,
          }}
        >
          <CustomText content={"poste01"} />
          <CustomBtn content={"Abonner"} />
        </div>
        <div
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
            gap: 40,
            marginBottom: 20,
          }}
        >
          <CustomText content={"poste01"} />
          <CustomBtn content={"Abonner"} />
        </div>
        <div
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
            gap: 40,
            marginBottom: 20,
          }}
        >
          <CustomText content={"poste01"} />
          <CustomBtn content={"Abonner"} />
        </div>
      </div>
   
  );
};

export default Abonner;
