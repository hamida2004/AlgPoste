import React, { useState } from "react";
import CustomTitle from "../components/CustomTitle";
import CustomSubtitle from "../components/CustomSubtitle";
import CustomText from "../components/CustumText";

const FAQ = () => {
  const [expandedTask, setExpandedTask] = useState(null);

  const algeriePosteFAQs = [
    {
      question: "How can I open a postal account (CCP) with Algérie Poste?",
      answer:
        "Visit the nearest post office with a valid ID, proof of residence, and the required application form. Additional documents like a birth certificate may be needed.",
    },
    {
      question: "How can I check my CCP balance online?",
      answer:
        "You can check your CCP balance via the e-ccp.poste.dz portal or the BaridiMob mobile app.",
    },
    {
      question: "What is BaridiMob, and how can I use it?",
      answer:
        "BaridiMob is a mobile app for managing CCP accounts, making payments, and transferring funds. Download it and activate it at a post office.",
    },
    {
      question: "How can I transfer money between CCP accounts?",
      answer:
        "Transfers can be made using the BaridiMob app, the e-CCP website, or at a post office. You’ll need the recipient’s CCP number and key (clé).",
    },
    {
      question: "What services does the Edahabia card provide?",
      answer:
        "The Edahabia card allows withdrawals from ATMs, online purchases, bill payments, and account management through BaridiMob or the Algérie Poste website.",
    },
    {
      question: "How do I apply for an Edahabia card?",
      answer:
        "Apply online via edcarte.poste.dz or visit a post office. You will need your CCP number and identification documents.",
    },
    {
      question: "What should I do if my Edahabia card is lost or stolen?",
      answer:
        "Report the loss or theft immediately at a branch or via customer service. You can request a replacement card afterward.",
    },
    {
      question: "What are the working hours of Algérie Poste offices?",
      answer:
        "Most offices operate from 8:00 AM to 5:00 PM with a midday break. Hours vary by region, and some may open on weekends for essential services.",
    },
  ];

  console.log(algeriePosteFAQs);

  const toggleExpand = (index) => {
    setExpandedTask(expandedTask === index ? null : index);
  };

  return (
    <div className="container">
      <CustomSubtitle
        content={"Participez à l'amélioration de notre system!"}
      />
      <CustomTitle content={"Tâches mises au développement :"} />
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          padding: "40px 0px",
        }}
      >
        {algeriePosteFAQs.map((element, index) => (
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <div
            style={{
              width: "100%",

              display:'flex'
            }}
            >
              <CustomText content={element.question} width={"80%"} />
              <button
                onClick={() => toggleExpand(index)}
                style={{
                  display: "flex",
                }}
              >
                {expandedTask === index ? "Réduire" : "En savoir plus"}
              </button>
            </div>
            {expandedTask === index && element.answer && (
              <p 
              style={{
                width:'60%'
              }}
              className="task-description">{element.answer}</p>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
