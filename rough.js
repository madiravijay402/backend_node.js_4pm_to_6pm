// let reverseString=(S)=>{
//     let reverse=[];
//     for(let i=S.length-1;i>=0;i--){
//         reverse+=S[i];
//     }
//     console.log(reverse);
    
// }
// reverseString("vijay");

// let a=[12,900,23,6,89];
// let largest=a[0];
// let second=a[0];
// for(let i=0;i<=a.length-1;i++){
//     if(a[i]>largest){
//         largest=a[i]
//     }
// }
// for(let i=0;i<a.length;i++){
//     if(a[i]>second && a[i]<largest){
//         second=a[i]
//     }
// }
// console.log(largest);
// console.log(second);

// let a=[1,22,22,3,4,5];
// let removeDup=[...new Set(a)];
// console.log(removeDup);


// let a="viav";
// let b=[];
// for(let i=a.length-1;i>=0;i--){
//     b+=a[i];
// }
// if(a===b){
//     console.log("palindrome");
// }
// else{
//     console.log("not a palidrome");
    
// }

// let a=[1,3,8,15];
// let even=a.filter((n)=>n%2===0);
// console.log(even);


// let a="vijay";
// let b="jayv";
// if(a.length!== b.length){
//     console.log("not an anagram");
    
// }
// let str1=a.split('').sort().join('');
// let str2=b.split('').sort().join('');
// if(str1===str2){
//     console.log(`${a} and ${b} are anagram strings`);
    
// }

// custom implementation of Array.prototype.map
// const customMap = (arr, callback) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i], i, arr));
//   }
//   return result;
// };

// const square = (num) => num * num;

// // use customMap and log the transformed array
// console.log(customMap([1, 2, 3, 4], square));
  


