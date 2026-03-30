let catalogue = [
{ id:1, nom:'Stylo bille bleu', cat:'ecriture', prix:1.20, stock:150,
note:4.2 },
{ id:2, nom:'Stylo bille rouge', cat:'ecriture', prix:1.20, stock:0,
note:4.0 },
{ id:3, nom:'Stylo gel noir', cat:'ecriture', prix:2.50, stock:60,
note:4.7 },
{ id:4, nom:'Cahier A4 200p', cat:'papier', prix:5.50, stock:45,
note:4.8 },
{ id:5, nom:'Cahier A5 100p', cat:'papier', prix:3.20, stock:80,
note:4.3 },
{ id:6, nom:'Bloc-notes A5', cat:'papier', prix:2.80, stock:30,
note:3.9 },
{ id:7, nom:'Surligneur jaune', cat:'ecriture', prix:1.80, stock:0,
note:4.5 },
{ id:8, nom:'Surligneur rose', cat:'ecriture', prix:1.80, stock:20,
note:4.3 },
{ id:9, nom:'Ciseaux bureau', cat:'bureau', prix:6.50, stock:8,
note:3.7 },
{ id:10, nom:'Agrafeuse', cat:'bureau', prix:9.90, stock:5,
note:4.1 },
{ id:11, nom:'Post-it jaunes', cat:'papier', prix:4.20, stock:60,
note:4.6 },
{ id:12, nom:'Agenda 2025', cat:'agenda', prix:12.0, stock:15,
note:4.7 },
{ id:13, nom:'Marqueur permanent', cat:'ecriture', prix:3.10, stock:35,
note:4.4 },
{ id:14, nom:'Regle 30cm', cat:'bureau', prix:1.50, stock:90,
note:3.8 },
{ id:15, nom:'Compas de precision', cat:'bureau', prix:8.90, stock:12,
note:4.6 },
];


let newId = Math.max(...catalogue.map(p => p.id)) + 1;

const cat1 = [...catalogue, { id: newId,
  nom:'product',
  cat:'bureau',
  prix:29,
  stock:90
 }];
console.log(cat1);


const cat2 = catalogue.map(p => p.id === 4 ? { ...p, ...{
  id:99,
  nom:'phone'} } : p);

console.log(cat2);

const cat3 = catalogue.filter(p => p.id !== 2);
console.log(cat3);

function getProduitById(id){
    let cat=catalogue.filter(c => c.id==id);
    return console.log(cat);
}
getProduitById(2);