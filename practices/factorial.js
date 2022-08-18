function factRecurrsive(number){
    if(number==2) return 2;
    return number*factRecurrsive(number-1);
}
console.log(factRecurrsive(5));


function factIterative(number){
    let fact=1;
    while(number>=2){
        fact=number*fact;
        number--;
    }
    return fact;
}
console.log(factIterative(5));