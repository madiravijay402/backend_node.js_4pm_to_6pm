// // console.log(a);
// let a=40;
// console.log(a);

// here a is hoisted but not initialized js kn iws that a is there but until let a=40 intialized it will sow eroor this applies to const as well 

// console.log(b); // undefined
// var b = 10;    
const add=(a,b)=>{
     console.log(a+b);
     
}
   // will 
// console.log(add(10,30));
add(10,30);

const noPara=()=>{
    console.log("hello");
}
noPara();

const onePara=(a)=>{
    console.log(a);
}
onePara("vanakam");

const multiPara=(a,b,c)=>{
    return a+b+c;
}
console.log(multiPara(12,3,29));

const multiState=(a,b)=>{
    let result=a+b
    return result;
}
console.log(multiState(10,20));
