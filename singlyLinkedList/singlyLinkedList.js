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
        
    }
}


let linkedList= new SinglyLinkedList()
//pushing element to the linked list
linkedList.push("x")
linkedList.push("y")
linkedList.push("z")
console.log(linkedList)
let x=linkedList.get("first")
console.log(x)
