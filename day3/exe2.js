const inventaire = {
stylo: { prix: 1.5, stock: 200 },
cahier: { prix: 3.5, stock: 85 },
regle: { prix: 0.8, stock: 0 },
compas: { prix: 8.5, stock: 12 },
};
let keys=Object.keys(inventaire);


let obj=Object.values(inventaire);

Object.entries(inventaire).forEach(([nom, { stock, prix }]) => {
console.log(`${nom} :`+stock *prix);
});

const prixseul = Object.fromEntries(
Object.entries(inventaire).map(([i,{stock,prix}])=>{return [i,prix]} 
        )); 
console.log(prixseul);


