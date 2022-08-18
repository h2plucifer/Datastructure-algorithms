let arr=[1,2,3,4,5,6,7];
function BS(arr,val,start=0,end=arr.length-1){
    
    //sort array if not sorted
    if(start>end) return false;
    let mid=Math.floor((start+end)/2);
    if(val==arr[mid]) return true;
    if(val<arr[mid]){
        return BS(arr,val,start,mid-1)
    }
    else if(val>arr[mid]){
        return BS(arr,val,mid+1,end)
    }
}


console.log(BS(arr,1))

