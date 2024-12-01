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
    }
}


let linkedList= new SinglyLinkedList()
