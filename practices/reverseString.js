let str="HELLO WORLD";

function reverseString(str){
    str=str.split("");
    let reversed=[];
    //console.log(str.reverse().join(""));
    for(let i=str.length-1;i>=0;i--){
        reversed.push(str[i]);
    }
    console.log(reversed.join(""));
    return reversed;
}


console.log(reverseString(str));