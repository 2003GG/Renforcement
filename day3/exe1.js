const fiche = { prenom:'Bob', nom:'Dupont', age:34, ville:'Lyon' };

console.log('nom :'+fiche.nom);
console.log('prenom :'+fiche.prenom);
function getProp(obj,key){
  if(obj[key]){
   console.log(obj[key]);
    }
  else{
   console.log('Inconnu');
    }
}
getProp(fiche,'ville');

function renommerCle(obj, ancienne, nouvelle){

  obj[nouvelle]=obj[ancienne];
  delete obj[ancienne];
}
renommerCle(fiche,'prenom','lastname');
console.log(fiche)

