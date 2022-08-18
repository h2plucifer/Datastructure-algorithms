//enqueue & dequeue using 2 stacks only

let inputStack=[];
let outputStack=[];

function enqueue(inputStack,item){
    return inputStack.push(item);
}

function dequeue(inputStack,outputStack){
    if(outputStack.length==0){
        while(inputStack.length){
            outputStack.push(inputStack.pop());
        }
    }
    return outputStack.pop();
}

enqueue(inputStack,10);
enqueue(inputStack,20);
enqueue(inputStack,30);
enqueue(inputStack,40);

console.log(inputStack);
console.log(outputStack);
console.log(dequeue(inputStack,outputStack));


enqueue(inputStack,50);
console.log(dequeue(inputStack,outputStack));
console.log(inputStack);
enqueue(inputStack,60);
console.log(inputStack)
console.log(outputStack);
console.log(dequeue(inputStack,outputStack));
console.log(dequeue(inputStack,outputStack));

console.log(inputStack)
console.log(outputStack);
console.log(dequeue(inputStack,outputStack));


