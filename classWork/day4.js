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

