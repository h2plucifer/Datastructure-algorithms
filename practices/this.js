function fun1(){
    console.log("func1------")
    console.log(this);
}

let obj={
    fun2:function(){ console.log("fun2------");console.log(this);}
}
let fun3=()=>{
    console.log("fun3------");
    console.log(this);}
function fun4(){
    console.log("fun4------");
    (()=>{console.log("1");console.log(this)})();
    (function(){console.log("2");console.log(this)})();
    let f1=()=>{console.log("3");console.log(this)}
    f1();
}

console.log(fun1());
console.log(obj.fun2());
console.log(fun3());
console.log(fun4());


