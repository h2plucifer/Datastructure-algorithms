let array=[20,10,40,60,50,30];


function iSort(arr){
    for(let i=1;i<arr.length;i++){
        let temp=arr[i];
        for(var j=i-1;arr[j]>temp && j>-1;j--){
           // if(arr[j]>temp)
            arr[j+1]=arr[j]

        }
        arr[j+1]=temp;
    }
    return arr;
}

console.log(iSort(array))