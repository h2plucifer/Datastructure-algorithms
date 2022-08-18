let a1=[1,5,3,6,11,2,8],
    target=9;

function checkSum(arr,target){
    let map={};
    let elem;
    for(let i=0;i<arr.length;i++){
        elem=arr[i];
        complement=target-elem;
        if(map[complement]){
            return [map[complement], i]
        }
        else
            map[elem]=i;
    }
    console.log(map);
}

console.log(checkSum(a1, target));