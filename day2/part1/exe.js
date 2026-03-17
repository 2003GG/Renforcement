const prenoms = ['Alice', 'Bob', 'Clara', 'David', 'Eva'];

prenoms.forEach((element,index) => {
    console.log(`${index} ${element}`)
    
});


prenoms.forEach(element => {
  console.log(element + ' length =', element.length);
});


prenoms.forEach(element => {
    if(element.length>3)
  console.log(element + ' length =', element.length);
});