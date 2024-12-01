const data = [
  {
      wilaya: "Algiers",
      communes: [
          { name: "Bab El Oued", atm: ["N1", "N2", "N3"] },
          { name: "El Madania", atm: ["N1", "N2", "N3"] },
          { name: "Bir Mourad Raïs", atm: ["N1", "N2", "N3"] },
      ],
  },
  {
      wilaya: "Oran",
      communes: [
          { name: "Es-Sénia", atm: ["N1", "N2", "N3"] },
          { name: "El Kerma", atm: ["N1", "N2", "N3"] },
          { name: "Bir El Djir", atm: ["N1", "N2", "N3"] },
      ],
  },
  {
      wilaya: "Constantine",
      communes: [
          { name: "El Khroub", atm: ["N1", "N2", "N3"] },
          { name: "Hamma Bouziane", atm: ["N1", "N2", "N3"] },
          { name: "Zighoud Youcef", atm: ["N1", "N2", "N3"] },
      ],
  },
  // Adding new wilayas
  {
      wilaya: "Blida",
      communes: [
          { name: "Blida City", atm: ["B1", "B2"] },
          { name: "Boufarik", atm: ["B1", "B2"] }
      ],
  },
  {
      wilaya: "Biskra",
      communes: [
          { name: "Biskra City", atm: ["C1", "C2"] },
          { name: "El Outaya", atm: ["C1"] }
      ],
  },
  {
      wilaya: "Batna",
      communes: [
          { name: "Batna City", atm: ["D1", "D2"] },
          { name: "Khenchela", atm: ["D1"] }
      ],
  },
  {
      wilaya: "Tlemcen",
      communes: [
          { name: "Tlemcen City", atm: ["E1", "E2"] },
          { name: "El Aricha", atm: ["E1"] }
      ],
  },
  {
      wilaya: "Sétif",
      communes: [
          { name: "Sétif City", atm: ["F1", "F2"] },
          { name: "El Eulma", atm: ["F1"] }
      ],
  }
];

module.exports = data;