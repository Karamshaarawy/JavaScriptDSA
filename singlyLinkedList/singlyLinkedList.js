class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}


class SinglyLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }
    push(val){
        let newNode=new Node(val)
        if(!this.head){
            this.head=newNode
            this.tail=this.head
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++
        return this
    }
    pop(){
        let current=this.head
        let newTail=current
        if (!current){
            return undefined
        }else{
            while(current.next){
                newTail=current
                current=current.next
            }
            this.tail=newTail
            this.tail.next=null
            this.length--
        }
        if (this.length===0){
            this.head=null
            this.tail=null
        }
        return current.val
    }
    shift(){
        let oldHead=this.head
        if(!oldHead) return undefined
        let newHead=this.head.next
        this.head=newHead
        this.length--
        if(this.length===0){
            this.tail=null
        }
        return oldHead
    }
    unshift(val){
        let newHead=new Node(val)
        let oldHead=this.head
        if(!oldHead){
            this.head=newHead
            this.tail=newHead
        }else{
            newHead.next=oldHead
            this.head=newHead
        }
        this.length++
        return this
    }
    get(index){
        if(index<0||index>=this.length) return null
        let counter=0
        let current=this.head
        while (counter<index){
            current=current.next
            counter++
        }
        return current
    }
    set(index,value){
        let target=this.get(index)
        if(!target) return false
        target.val=value
        return true
    }

    insert(index,value){
        if(index<0||index>this.length){
            return false
        }

        if(index===this.length) {
            this.push(value) 
            return true
        }

        if (index===0){
            this.unshift(value)
            return true
        }
        let newNode=new Node(value)        

        let nodeBefore=this.get(index-1)
        let nodeNext=nodeBefore.next

        nodeBefore.next=newNode
        newNode.next=nodeNext

        this.length++
        
        return true
    }

    remove(index){
        if (index<0||index>this.length) return undefined
        if (this.length===index-1)  return this.pop(index)
        if (index===0) return this.shift()
        let nodeBefore=this.get(index-1)
        let removedNode=this.get(index)
        let nodeNext=this.get(index+1)
        nodeBefore.next=nodeNext
        this.length--
        return removedNode.val
    }

    reverse(){
        let node=this.head
        this.head=this.tail
        this.tail=node

        let next
        let prev=null

        for(let i=0;i<this.length;i++){
            next=node.next
            node.next=prev
        }

        
    }
}


let linkedList= new SinglyLinkedList()
//pushing element to the linked list
linkedList.push("x")
linkedList.push("y")
linkedList.push("z")
console.log(linkedList)
let a=linkedList.insert(2,"xyz")
console.log(a)
console.log(linkedList)
let x=linkedList.insert(1,"xyz")
console.log(x)
console.log(linkedList)
let y=linkedList.remove(4)
console.log(y)
console.log(linkedList)
let z=linkedList.insert(8,"xyz")
console.log(z)
console.log(linkedList)
