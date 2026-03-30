const couleurs=['rouge','vert','bleu','jaune'];
const autre=['noir','violete','blanche'];

let spread=[...couleurs,...autre];
let copiePanier=[...spread,'cerise'];
let numbers=[3,1,4,1]
let numbers2=[...numbers,5,9,2,6];

const Max1=Math.max(...numbers);
const Max2=Math.max(...numbers2);

console.log(copiePanier);
console.log(Max1);
console.log(Max2);