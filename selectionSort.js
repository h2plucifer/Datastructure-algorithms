let array=[20,10,40,60,50,30];

function sSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min =i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]) min=j;
        }
        if(i!==min){
            let temp=arr[i];
            arr[i]=arr[min];
            arr[min]=temp;

        }
        
    }
    return arr;
  
}

console.log(sSort(array))