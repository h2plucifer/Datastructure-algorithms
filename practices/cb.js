function test(a,cb){
    console.log(a);
    cb(a);
}

function callBack(a){
    console.log("cb : "+a);
}

test(10,callBack);