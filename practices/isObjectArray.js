function isArray(obj){
    console.log(Array.isArray(obj));
    console.log({a:10}.length);
    console.log(typeof 10 =="string");
    console.log(Object.prototype.toString.call({a:10})=='[object Array]')
}

isArray(['a',10]);