//O(n^2)
function recurringChar(arr){
    for(let i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                return arr[i];
            }
        }
    }

}

function recurrChar(arr){
    let map={};
    for(i=0;i<arr.length;i++){
        
        if(map[arr[i]]){
            return arr[i];
        }
        map[arr[i]]=i;
    }
    return undefined
}

console.log(recurringChar([1,2,3,6,4,5,2,9,10]));
console.log(recurrChar([1,2,3,6,4,5,6,9,10]));