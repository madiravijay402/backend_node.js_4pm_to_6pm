
 "use strict";
 let count=12;

 const outer = ()=>{
  
  let count = 0;

  return ()=>{
 
    // count = count + 1 = 1+1 = 2
    count++

    return count

  }


}

console.log(count);


const data = outer()


console.log(data());
console.log(data());
console.log(data());


