let courses=[
    {
        nom:"Math",
        prix:120
    },
    {
        nom:"svt",
        prix:100,
    }
];

let sum=0;
courses.forEach(course => {
     sum=+course.prix;
});
console.log(sum);

// OR
let total=0;
for(let i=0;i<courses.length;i++){
    total=+courses[i].prix;
}
console.log(total);