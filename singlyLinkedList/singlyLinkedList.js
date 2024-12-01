class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}

let first=new Node("Hi")
first.next=new Node("there")
first.next.next=new Node("How")
first.next.next.next=new Node("are")
first.next.next.next.next=new Node("you?")

console.log(first)

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
    
}


let linkedList= new SinglyLinkedList()
console.log(linkedList)
//pushing elemnt to the linked list
linkedList.push("x")
console.log(linkedList)
linkedList.push("y")
console.log(linkedList)
linkedList.push("z")
console.log(linkedList)