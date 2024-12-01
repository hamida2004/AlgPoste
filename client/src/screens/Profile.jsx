import React from "react";
import { SlBadge } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import CustomSubtitle from "../components/CustomSubtitle";
import { colors } from "../asstes/styles";
import CustomTitle from "../components/CustomTitle";
import CustomInput from "../components/CustomInput";
import { RiPoliceBadgeFill } from "react-icons/ri";


export const Profile = () => {
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
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="avatar">
          <i className="fas fa-user-circle" />
          <img
            src="https://images.unsplash.com/photo-1521566652839-697aa473761a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Person image"
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
            }}
          />
        </div>
        <div>
          <CustomSubtitle content={"Nom:"} />
          <CustomInput value={"John Doe"} />
        </div>
        <div>
          <CustomSubtitle content={"Prenom:"} />
          <CustomInput value={"john_doe@gmail.com"} />
        </div>
      </div>
      <div
        className="half"
        style={{
          padding: 80,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CustomTitle content={"Your budges"} />
  
        <div
        style={{
          // width:'100%',
          display:"flex",
          gap:40
        }}
        >
        <SlBadge color={colors.yellow} size={40} />
        <RiPoliceBadgeFill color={colors.yellow} size={40} />

        </div>
        <div className="logout">
          <div
            onClick={() => {}}
            style={{
              display: "flex",
              gap: 8,
              marginTop:100,
              width:'100%'
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
        </div>
      </div>
    </div>
  );
};
export default Profile;
