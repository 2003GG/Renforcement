const scores = [45, 12, 78, 3, 99, 56, 23, 67];
const noms = ['Zoe','Alice','Marc','Bob','Yasmine','Chloe'];

let scoresTrieCroi=scores.sort((a,b)=>a-b);
console.log(scoresTrieCroi);

let scoresTrieDec=scores.sort((a,b)=>b-a);
console.log(scoresTrieDec);

let nomTrie = noms.sort((a, b) => a.localeCompare(b));
console.log(nomTrie);

let sliceOne=scoresTrieDec.slice(0,2);
console.log(sliceOne);
