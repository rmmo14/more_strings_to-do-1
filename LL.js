class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value) {
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    front() {
        if (!this.head) {
            return null;
        }
        return this.head.value;
    }
    removeFront() {
        if (!this.head) {
            return null;
        }
        this.head = this.head.next;
        return this.head;
    }
}

var myNode1 = new Node("Reptar");
var myNode2 = new Node("Angelica");
var myNode3 = new Node("Tommy");
var sll1 = new SLL();
sll1.head = myNode1;
myNode1.next = myNode2;
myNode2.next = myNode3;

console.log(sll1.front());
// console.log(sll1.removeFront());
console.log(sll1.addFront("Dill"));