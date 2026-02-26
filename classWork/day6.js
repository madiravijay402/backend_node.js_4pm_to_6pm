let arr=[12,3,222,90];
let copy=[...arr];
console.log(copy);

//  let c=...arr; // cannot re declar block scoped variable

let obj={
    name:"vijay",
    age:22
}
console.log(obj);

let copyobj={...obj,age:29,city:"chennai"}
console.log(copyobj);

// let copyarray={...arr}
// console.log(copyarray);

// let copyObject=[...obj]; // object is not iteratable
// console.log(copyObject);

let a1=["react","js","java"];
let cA=[...a1,"node","mern"];
console.log(cA);

const object={newData:"react"}
const newobj={object}
console.log(newobj); 





