let taches = [];
taches.push('Coder', 'Tester', 'Deployer');
taches.unshift('Analyser');
let last = taches.pop();
console.log(last);

let first=taches.shift();
console.log(first)

taches.splice(1,0,'Documente');

taches.splice(1,1,'Revue de code')
console.log(taches)