function mul(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}

console.log(mul(2)(3)(4));
console.log(mul(4)(3)(4));


function createBase(a){
    return function(b){
        return a+b;
    }
}
const addSix=createBase(6);
console.log(addSix(10));
console.log(addSix(21));