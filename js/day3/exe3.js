const commande = {
id: 'CMD-001',
client: { nom: 'Dupont', email: 'dupont@mail.com' },
total: 18.50,
livree: false
};
const{id,total}=commande;
console.log({id,total});

const {client:{nom:nomClient}}={client:{nom:'mohamed'}};

console.log({client:{nom:nomClient}});

const{total: montant, livree: Livree}=commande;
console.log(commande);


