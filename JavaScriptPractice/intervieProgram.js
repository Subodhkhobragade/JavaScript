let data=[4,5,3,2,1,2,3,4,5];
// data.length=3;
// console.log(data);
// let sum= data.reduce((x,y)=>x+y);
// console.log(sum);

let unique = new Set(data);
console.warn([...unique]);