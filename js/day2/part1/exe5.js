const catalogue = [
  { ref: "A01", nom: "Stylo bille", prix: 1.2 },
  { ref: "A02", nom: "Cahier A4", prix: 3.5 },
  { ref: "A03", nom: "Surligneur", prix: 2.1 },
  { ref: "A04", nom: "Post-it", prix: 3.8 },
  { ref: "A05", nom: "Ciseaux", prix: 6.3 },
];

let ref = catalogue.find((c) => c.ref === "A03");
console.log(ref);

let findByIndex = catalogue.findIndex((c) => c.nom === "Cahier A4");
console.log(findByIndex);

let findNotExist = catalogue.find((c) => c.nom === "A99");
if (!findNotExist) {
  console.log("catalogue n'existe pas");
}
