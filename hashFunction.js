function _hash(key){
    let hashTableLength=20;
    let hash=0;
    for(let i=0;i<key.length;i++){
        hash=(hash+key.charCodeAt(i)*i)%hashTableLength;
    }
    console.log(hash);
}

_hash("hari");