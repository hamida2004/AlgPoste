import { CustomParagraph } from "../components/CustomParagraph";
import React, { useState } from "react";
import CustomTitle from "../components/CustomTitle";
import CustomBtn from "../components/CustomBtn";
import CustumText from "../components/CustumText";
import CustomSubtitle from "../components/CustomSubtitle";
import CustomInput from "../components/CustomInput";
import { colors } from "../asstes/styles";
import { IoClose } from "react-icons/io5";

const Collaboration = () => {
  const [show, setShow] = useState(false);
  const [expandedTask, setExpandedTask] = useState(null);
  const Modal = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            zIndex: 900,
            padding: 40,
            borderRadius: 16,
            boxShadow: `0px 0px 4px ${colors.blue}`,
            width: "40%",
            // height: "60vh",
            backgroundColor: colors.white,
            position: "relative",
          }}
        >
          <IoClose
            color={colors.red}
            size={24}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              cursor: "pointer",
            }}
            onClick={() => {
              setShow(false);
            }}
          />
          <CustomTitle content={"Partagez votre idée !"} />
          <div
            style={{
              height: 16,
            }}
          ></div>
          <CustumText content={"Title"} />
          <CustomParagraph
            content={"Plateforme permanente de soumission d'idées"}
          />
          <div
            style={{
              height: 16,
            }}
          ></div>
          <CustumText content={"Description"} />
          <CustomParagraph
            content={
              "Créer une plateforme où les utilisateurs, développeurs, et experts financiers peuvent soumettre leurs idées à tout moment, et non pas uniquement lors de compétitions annuelles."
            }
          />
          <div
            style={{
              height: 16,
            }}
          ></div>
          <CustomInput placeHolder={"Inserez le lien de repository github"} />
          <div
            style={{
              height: 20,
            }}
          ></div>
          <CustomBtn
            content={"Submit"}
            handleClick={() => {
              alert("Submitted!");
              setShow(false);
            }}
          />
        </div>
      </div>
    );
  };
  const tasks = [
    {
      title: "Plateforme permanente de soumission d'idées",
      description:
        "Créer une plateforme où les utilisateurs, développeurs, et experts financiers peuvent soumettre leurs idées à tout moment, et non pas uniquement lors de compétitions annuelles.",
    },
    {
      title: "Portail développeurs avec un environnement sandbox",
      description: "",
    },
    { title: "Éléments de gamification", description: "" },
    { title: "Webinaires et ateliers", description: "" },
    {
      title: "Portail de plaintes et suggestions avec analyse de sentiments",
      description: "",
    },
    { title: "Collaboration ouverte pour les développeurs", description: "" },
  ];

  const toggleExpand = (index) => {
    setExpandedTask(expandedTask === index ? null : index);
  };

  return (
    <div
      className="container"
      style={{
        paddingTop: 120,
      }}
    >
      <CustomSubtitle
        content={"Participez à l'amélioration de notre system!"}
      />
      <CustomTitle content={"Tâches mises au développement :"} />
      <div
        style={{
          height: 40,
        }}
      ></div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="task-item"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
              justifyContent: "center",
              gap: 40,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div
                className="task-header"
                style={{
                  width: "80%",
                }}
              >
                <span>{task.title}</span>
                <button onClick={() => toggleExpand(index)}>
                  {expandedTask === index ? "Réduire" : "En savoir plus"}
                </button>
              </div>
              <CustomBtn
                content={"Participer"}
                handleClick={() => {
                  setShow(true);
                }}
              />
            </div>
            {expandedTask === index && task.description && (
              <p
                style={{
                  width: "60%",
                }}
                className="task-description"
              >
                {task.description}
              </p>
            )}
          </li>
        ))}
      </ul>
      {show && <Modal />}
    </div>
  );
};

export default Collaboration;
