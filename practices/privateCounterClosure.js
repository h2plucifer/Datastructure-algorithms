function counter(){
    let _counter=0;
    return function add(val){
        _counter+=val;
        return _counter;
    }
}

let c=counter();
console.log(c(10));
console.log(c(20));
console.log(c(30));