import React, { useState } from "react";
import CustomSubtitle from "../components/CustomSubtitle";
import CustomTitle from "../components/CustomTitle";
import CustomBtn from "../components/CustomBtn";
import CustomParagraph from "../components/CustomParagraph";
import CustumText from "../components/CustumText";
import CustomText from "../components/CustumText";
const SDA = () => {
  const [etatDAB, setEtatDAB] = useState("Fonctionnelle");
  const [wilaya, setWilaya] = useState("");
  const [commune, setCommune] = useState("");
  const [dab, setDab] = useState("");

  const handleEtatChange = (etat) => {
    setEtatDAB(etat);
  };
  return (
    <div className="container" style={{display:'flex'}}>
      <div className="half" style={{padding:20}}>
        <CustomSubtitle content={"Reste informé de l’état des DABs :"} />

        <CustomTitle content={"Suivi des DAB :"} />

        <CustomText content={"Selectionner une localisation"} width={"200px"} />
        <div style={{ width: "50%", display: "flex" }}>
          <div style={{ marginBottom: "20px", display: "flex" }}>
            <label>
              <select
                value={wilaya}
                onChange={(e) => setWilaya(e.target.value)}
                style={{
                  marginLeft: "10px",
                  backgroundColor: "#f9fcff",
                  width: "108px",
                }}
              >
                <option value="">Wilaya</option>
                <option value="Alger">Alger</option>
                <option value="Oran">Oran</option>
                {/* Ajoutez d'autres wilayas */}
              </select>
            </label>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label>
              <select
                value={commune}
                onChange={(e) => setCommune(e.target.value)}
                style={{
                  marginLeft: "10px",
                  backgroundColor: "#f9fcff",
                  width: "108px",
                }}
              >
                <option value="">Commune</option>
                <option value="Commune1">Commune1</option>
                <option value="Commune2">Commune2</option>
                {/* Ajoutez d'autres communes */}
              </select>
            </label>
          </div>
        </div>
        <CustomText content={"Selectionner une DAB :"} width={"200px"} />
        <div style={{ marginBottom: "20px" }}>
          <label>
            <select
              value={dab}
              onChange={(e) => setDab(e.target.value)}
              style={{
                marginLeft: "10px",
                backgroundColor: "#f9fcff",
                width: "108px",
              }}
            >
              <option value="">DAB</option>
              <option value="DAB1">DAB1</option>
              <option value="DAB2">DAB2</option>
              {/* Ajoutez d'autres DAB */}
            </select>
          </label>
        </div>
        <div
          style={{
            display: "flex",
            gap: 20,
            marginTop: "40px",
          }}
        >
          <CustomBtn content={"set as fonctional"} />
          <CustomBtn content={"set as non functional"} />
          <CustomBtn content={"set as out of cash"} />
        </div>
      </div>

      <div className="half" style={{padding:"80px 20px",alignItems:'center'}}>
        <CustomText content={'Etat de distributeur automatique:'}/>
        <div
          style={{
            color: etatDAB === "Fonctionnelle" ? "green" : "red",
            fontWeight: "bold",
            marginTop: "20px",
            fontSize:'3em'
          }}
        >
          {etatDAB} {etatDAB === "Fonctionnelle" ? "✔️":""}
        </div>
        </div>
    </div>
  );
};

export default SDA;
