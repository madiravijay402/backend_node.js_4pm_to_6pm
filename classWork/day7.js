// // let pm=new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         resolve("success")
// //     },2000)
// // });

// // pm.then(result=>{
// //     console.log(result);
    
// // })

// const ageValidation=(age)=>{
//     return new Promise((resolve,reject)=>{
//         if(age>18){
//             resolve("eligible")
//         }else{
//             reject("not eligible")
//         }
//     })

// }
// ageValidation(12).then(res=>{console.log(res)}).catch(err=>console.log(err));

// new Promise((resolve)=>
// {
//     resolve(5);
// }
// ).then(num=>num*5).then(num=>num+5).then(result=>{console.log(result)
// }).catch(error=>console.log(error)
// );

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// console.log("Start");

// delay(1000)
// .then(() => {
//     console.log("Step 1");
//     return delay(1000);
// })
// .then(() => {
//     console.log("Step 2");
//     return delay(1000);
// })
// .then(() => {
//     console.log("Step 3");
// });