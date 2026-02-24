
 count=12;
   count=15;
 const outer = ()=>{

  let count = 0;

  return ()=>{
 
    // count = count + 1 = 1+1 = 2
    count++

    return count

  }


}
console.log(typeofcount);


const data = outer()


console.log(data());
console.log(data());
console.log(data());


