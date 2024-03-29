class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BST{
    constructor(){
        this.root=null;
    }

    insert(value){
        const newNode=new Node(value);
        if(this.root==null){ this.root=newNode;  return this;}
        let temp=this.root;
        while(true){
            if(newNode.value==temp.value)return undefined;
            if(newNode.value<temp.value){
                if(temp.left==null){temp.left=newNode; return this;}
                temp=temp.left;
            }
            else if(newNode.value>temp.value){
                if(temp.right==null){temp.right=newNode; return this;}
                temp=temp.right;
            }

        }

    }
}

let newNode=new BST();
console.log(newNode);
newNode.insert(100);
console.log(newNode);