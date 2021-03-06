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
    contains(value) {
        var runner = this.head;
        while (runner != null) {
            if (runner.value == value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    length() {
        var runner = this.head;
        var counter = 0;
        while (runner != null) {
            counter++;
            runner = runner.next;
        }
        return counter;
    }
    display() {
        var runner = this.head;
        var str = "";
        while (runner != null) {
            str += runner.value + " ";
            runner = runner.next;
        }
        return str;
    }
    max() {
        var max = this.head.value;
        var runner = this.head.next;
        while (runner) {
            if (max.length < runner.value.length) {
                max = runner.value;
            }
            runner = runner.next;
        }
        return max;
    }
    min() {
        var min = this.head.value;
        var runner = this.head.next;
        while (runner) {
            if (min.length > runner.value.length) {
                min = runner.value;
            }
            runner = runner.next;
        }
        return min;
    }
    average() {
        var sum = 0;
        var counter = 0;
        var avg;
        var runner = this.head.next;
        while (runner) {
            sum += runner.value.length;
            counter++;
            runner = runner.next;
        }
        avg = sum / counter;
        console.log('avg', avg);
        return avg;
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
// console.log(sll1.contains("John"));
// console.log(sll1.length());
// console.log(sll1.display());
console.log(sll1.max());
console.log(sll1.min());
console.log(sll1.average());