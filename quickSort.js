
function swap(a,i,j){
    let temp=a[i];
    a[i]=a[j];
    a[j]=temp    
}
function pivot(arr,pivotIndex=0,endIndex=arr.length-1){
 let swapIndex=pivotIndex;   
 for(let i=pivotIndex+1;i<=endIndex;i++){
     if(arr[i]<arr[pivotIndex]){
         swapIndex++;
         swap(arr,swapIndex,i);
     }
    }
     swap(arr,pivotIndex,swapIndex);
     return swapIndex;
 
}


function quickSort(arr, left=0,right=arr.length-1){
    
   if(left<right){
    let pivotIndex=pivot(arr,left,right);
    console.log(pivotIndex);
    quickSort(arr,left,pivotIndex-1);
    quickSort(arr,pivotIndex+1,right);
}
return arr;
}


console.log(quickSort([6,3,1,4,2,9,7]));