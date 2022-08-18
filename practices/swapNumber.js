function swap(a,b){
    a=a+b;
    b=a-b;
    a=a-b;
    return {a:a,b:b}
}

console.log(swap(10,20));
console.log(swap(30,20));