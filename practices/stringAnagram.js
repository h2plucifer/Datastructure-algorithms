function isAnagram(str1,str2){
    let s1=str1.split("").sort().join("");
    let s2=str2.split("").sort().join("");
    console.log(s1);
    console.log(s2);
    if(s1==s2)
    return true;
    else return false;
}

console.log(isAnagram("mary","Army"));