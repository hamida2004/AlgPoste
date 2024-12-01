import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomTitle from "../components/CustomTitle";
import CustomSubtitle from "../components/CustomSubtitle";
import CustomBtn from "../components/CustomBtn";
import { colors } from "../asstes/styles";

const Idees = () => {
  const [selectedProfile, setSelectedProfile] = useState("");

  const handleChange = (event) => {
    setSelectedProfile(event.target.value);
  };
  return (
    <div
      className="container"
      style={{
        paddingTop:120
      }}
    >
      <div>
        <CustomSubtitle
          content={"Contribuez a l’ameloiration de notre system!"}
        />
        <CustomTitle content={"Partagez votre idée !"} />
      </div>
      <div className="container" style={{display:'flex',alignItems:'baseline',padding:0}}>
        <div className="half">
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: 400,
              }}
            >
              <label>Expert</label>
              <input
                type="radio"
                name="profile"
                value="Expert"
                checked={selectedProfile === "Expert"}
                onChange={handleChange}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

                width: 400,
              }}
            >
              <label>Developer</label>
              <input
                type="radio"
                name="profile"
                value="Developer"
                checked={selectedProfile === "Developer"}
                onChange={handleChange}
                style={{
                  color: colors.yellow,
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: 400,
              }}
            >
              <label>Finance Expert</label>
              <input
                type="radio"
                name="profile"
                value="Finance"
                checked={selectedProfile === "Finance"}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div
          className="half"
          style={{
            paddingTop: 80,
          }}
        >
          
          <CustomInput placeHolder={"Titre"} />
          <CustomInput placeHolder={"Description"} />
          <CustomInput placeHolder={"URL de github"} />

          <div
            style={{
              marginTop: 60,
            }}
          >
            <CustomBtn content={"Submit"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Idees;
