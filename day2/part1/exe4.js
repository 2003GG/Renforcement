const mots =
['chat','cheval','chien','lion','chameau','cobra','loup','chevre'];

let startwith = mots.filter(ele => ele.startsWith('ch'));
console.log(startwith);

let more5= mots.filter(ele=> ele.length>5);
console.log(more5);

let startwithAndMore5 = mots.filter(ele => ele.startsWith('ch') && ele.length>5);

console.log(startwithAndMore5);