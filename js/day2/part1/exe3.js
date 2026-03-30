const temperatures = [0, 15, 22, 35, -5, 100];

temperatures.map(ele=> ele* (9/5) + 32)

console.log(temperatures)

// 2. Creez un tableau de descriptions : '>= 30 => Chaud', '< 0 => Froid', sinon => 'Tempere'


let description=[];
temperatures.forEach(ele=>{
    if(ele>=30){
        description.push([ele,'Chaud']);
    }
    if(ele<0){
        description.push([ele,'Froid']);
    }
    else{
        description.push([ele,'Tempere']);

    }
})
console.log(description);

// let Chaud =temperatures.filter(ele=> ele>=30);
// let Froid= temperatures.filter(ele=> ele<0);
// let 