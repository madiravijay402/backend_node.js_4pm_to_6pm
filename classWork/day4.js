let empDetails={
    name:"vijay",
    age:22,
    city:"chennai",
    salary:25000
}
const copy = structuredClone(empDetails);
copy.name="ram";
console.log(copy.name);
console.log(empDetails.name);

const obj=(JSON.stringify(empDetails));
// obj.name="kumar";
console.log(obj);
console.log(empDetails.name);

// const deepCopy = _.cloneDeep(empDetails); // instal lodash library npm install lodash
// deepCopy.name="kumar";
// console.log(deepCopy.name);
// console.log(empDetails.name);  

const {name,...rest}= empDetails;
console.log(rest);
