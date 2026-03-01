let reverseString=(S)=>{
    let reverse=[];
    for(let i=S.length-1;i>=0;i--){
        reverse+=S[i];
    }
    console.log(reverse);
    
}
reverseString("vijay");