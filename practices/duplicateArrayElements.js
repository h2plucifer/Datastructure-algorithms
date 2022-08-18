let arr=[1,2,3,4];
//function duplicate(arr){
    let newArr=[...arr,...arr];
    console.log(newArr.length);
    console.log(arr.concat(arr));
//}