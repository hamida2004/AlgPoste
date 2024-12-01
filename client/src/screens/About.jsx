import React from "react";
import { colors } from "../asstes/styles";
import { Link, useNavigate } from "react-router-dom";
import img from "../asstes/images/img.png";
import Faq from "../asstes/images/Faq.png";
import Gallery from "../asstes/images/Gallery.png";
import { CustomParagraph } from "../components/CustomParagraph";
import CustomTitle from "../components/CustomTitle";
import CustomBtn from "../components/CustomBtn";
import Contact from "../components/Contact";
function About() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
        }}
      >
        <div
          className="half"
          style={{
            paddingTop: 120,
          }}
        >
          <CustomTitle content={"Bienvenue dans la communauté ALGpost"} />
          <CustomParagraph
            content={`
Rejoignez-nous dans un espace dynamique où votre voix est entendue et où le soutien est à portée de clic ! Engagez-vous avec d'autres utilisateurs pour construire une communauté qui vous valorise et vous informe !`}
          />
        </div>
        <div
          className="half"
          style={{
            justifyContent: "center",
          }}
        >
          <img
            src={img}
            style={{
              width: "90%",
              height: "90%",
            }}
          />
        </div>
      </div>
      <div className="container">
        <CustomTitle content={"Notre Services"} />
        <div
          style={{
            height: 40,
          }}
        ></div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
          }}
        >
          <div
            style={{
              boxShadow: `0px 0px 4px ${colors.blue}`,
              display: "flex",
              flexDirection: "column",
              padding: 40,
              borderRadius: 16,
              width: "24%",
              justifyContent: "space-between",

              height: "60vh",
            }}
          >
            <img
              src={Faq}
              alt=""
              style={{
                width: "90%",
                marginBottom: 40,
              }}
            />
            <CustomBtn
              content={"View FAQs"}
              handleClick={() => navigate("/faq")}
            />
          </div>
          <div
            style={{
              boxShadow: `0px 0px 4px ${colors.blue}`,
              display: "flex",
              flexDirection: "column",
              padding: 40,
              borderRadius: 16,
              width: "24%",
              justifyContent: "space-between",
              height: "60vh",
            }}
          >
            <img
              src={Gallery}
              alt=""
              style={{
                width: "90%",
                marginBottom: 40,
              }}
            />
            <CustomBtn
              content={"Abonner votre postes"}
              style={"padding:8px"}
              handleClick={() => navigate("/abonner")}
            />
          </div>
        </div>
      </div>
      <footer
        style={{
          width: "100%",
          height: 60,
          backgroundColor: colors.blue,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            color: colors.white,
          }}
        >
          &copy; 2024 ALGpost
        </p>
      </footer>
      <Contact />
    </>
  );
}

export default About;
