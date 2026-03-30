let array=[1,2,3,4,2,5,6,3];
function nettoyer(array){
   for(let i=0;i<array.length-1;i++){
    for(let j=i+1; j<array.length;j++)
    {
    if(array[i]==array[j]){
        array.splice(j,1);
    }
    }
   }
   return array;
}
nettoyer(array);

// OR
// let array2=[1,2,3,4,2,5,6,3];
// var newArray;
// function notrepate(array2){
//     newArray = array2.filter(ele=> ele!=ele);
//     return newArray
// }
// notrepate(array2);

