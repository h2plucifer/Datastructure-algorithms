function print(){
    for(let i=1;i<=100;i++){
        // if(i%3==0 && i%5==0)
        //     console.log(i+": fizzbuzz");
        // if(i%3==0 && i%5!=0)
        //     console.log(i+": fizz");
        // if(i%3!=0 && i%5==0)
        //     console.log(i +": buzz")

        let f=i%3==0;
        let b=i%5==0;
        console.log(f?(b?"fizzbuzz":"fizz"):(b?"buzz":""))
    }
}
console.log(print());

// for (let i = 1; i <= 100; i++) {
//     let f = i % 3 == 0,
//       b = i % 5 == 0;
//     console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
//   }