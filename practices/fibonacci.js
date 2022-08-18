function fiboRecurrsive(numbers){
    if(numbers<2) return numbers;
    return fiboRecurrsive(numbers-1)+fiboRecurrsive(numbers-2);
}
console.log(fiboRecurrsive(8));

function fiboIterative(n){
    let res=[0,1];
    for(let i=2;i<=n;i++)
    res.push(res[i-1]+res[i-2]);

    return res;
}
console.log(fiboIterative(8));