/****
 * MergeSort
 * - mergeSort 
 *      middle / left array /right array
 *      merge(mergeSort(left), mergeSort(right))
 * 
 * - merge
 *      array1, array2
 *      return combined array
 */
function mergeSort(arr){
    if(arr.length===1) return arr;
    let mid=Math.floor(arr.length/2);
    let left=arr.slice(0,mid);
    let right=arr.slice(mid);

    return merge(mergeSort(left),mergeSort(right));

}

function merge(arr1, arr2){
    let combine=[];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            combine.push(arr1[i]);
            i++;
        }
        else{
            combine.push(arr2[j]);
            j++;
        }
    }


    while(i<arr1.length){
        combine.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        combine.push(arr2[j]);
        j++;
    }

    return combine;
}

let array=[20,10,40,60,50,30];
console.log(mergeSort(array))