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