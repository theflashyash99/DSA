function reverseString(str){
    let reverseS = "";

    for(let i = str.length-1;i>=0;i--){
        reverseS += str[i];
    }

    return reverseS;
}


console.log(reverseString("SIta"))