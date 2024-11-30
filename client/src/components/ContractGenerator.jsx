import React from "react";
import jsPDF from "jspdf";
import logo from '../asstes/images/logo.png'
import CustomBtn from "./CustomBtn";
const ContractGenerator = ({ userName, ideaName, duration, price }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Add the logo (replace with the correct path to your logo image)
     // Replace with actual logo path

    // Add the header
    doc.addImage(logo, "PNG", 160, 10, 40, 20); // Right top corner
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(12);
    doc.text("République Populaire Algérienne", 105, 20, { align: "center" });
    doc.text("Alg Poste", 105, 27, { align: "center" });

    // Add the title
    doc.setFontSize(16);
    doc.text("Contrat d'Engagement", 105, 40, { align: "center" });

    // Add user details and agreement content
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    const content = `
      Ce contrat est établi entre Alg Poste et ${userName}, qui a soumis l'idée intitulée "${ideaName}".
      
      Durée d'exécution de l'idée : ${duration}
      Montant convenu : ${price} DZD

      Les deux parties conviennent des termes suivants :
      1. L'idée soumise sera mise en œuvre selon les standards de qualité d'Alg Poste.
      2. Alg Poste paiera le montant convenu après la finalisation du projet.
      3. ${userName} s'engage à fournir tout le support nécessaire pendant la mise en œuvre.

      Signé le ${new Date().toLocaleDateString()}.
    `;
    doc.text(content, 20, 50, { maxWidth: 170 });

    // Add signature areas
    doc.setFont("Helvetica", "bold");
    doc.text("Signature de l'utilisateur :", 20, 140);
    doc.line(20, 145, 90, 145); // User signature line

    doc.text("Signature et cachet d'Alg Poste :", 20, 160);
    doc.line(20, 165, 90, 165); // Alg Poste signature line

    // Save the document
    doc.save(`Contrat_${ideaName}_${userName}.pdf`);
  };

  return (
    <div>
      <CustomBtn content={'generatePDF'} handleClick={generatePDF}/>
    </div>
  );
};

export default ContractGenerator;
