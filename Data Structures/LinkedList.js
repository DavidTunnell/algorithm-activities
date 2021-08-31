//Linked List -common data structure where elements are stored in a node.
//The node has 2 piece of info, the data and the link to the next node
//the last node points to null, thats how you can tell it's the end
//the head is identified as well to know where it starts
//has more efficient insertions and deletions than arrays but slower access to entries
//always start at the beginning when doing an operation on a linked list

function LinkedList() {
    var length = 0;
    var head = null;

    var Node = function(element) {
        this.element = element;
        this.next = null;
    }

    //total  # of nodes
    this.size = function() {
        return length;
    }

    //1st element inserted
    this.head = function() {
        return head;
    }

    this.isEmpty = function() {
        return length === 0;
    }

    //I made this up
    this.tail = function() {
        var currentNode = head;
        //once next hits null it will be false
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    this.add = function(element) {
        var node = new Node(element);
        //if there is no node yet, set the head to the new node 
        if (head === null) {
            head = node;
        } else {
            //else find the last node and add a link to the new node
            var currentNode = head;
            //once next hits null it will be false
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    }

    this.remove = function(element) {
        var currentNode = head;
        var previousNode;
        //if the head equals the element being looked for
        if (currentNode.element === element) {
            //remove it and set the head to the next element
            head = currentNode.next;
        } else {
            //else find which node has the element
            while (currentNode.element !== element) {
                //capture the node with the element and the previous node for relinking
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next; // 1 <-> 2 <-> 3 if removing 2 connect 1 and 3
        }
        length--;
    }

    //gets the index of a specific element
    this.indexOf = function(element) {
        var currentNode = head;
        var index = -1; //starts at negative one because if a current node exists index++ will make it a zero 1st 
        //go through each node
        while (currentNode) {
            index++;
            //if it exists return the index
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
        }
        //nothing was found so return -1 as indicator
        return -1;
    }

    this.elementAt = function(index) {
        var currentNode = head;
        var count = 0;
        //because the association between each is the links, traversal is always needed from the head
        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element;
    }

    //I made this one too
    this.nodeAt = function(index) {
            var currentNode = head;
            var count = 0;
            while (count < index) {
                count++;
                currentNode = currentNode.next;
            }
            return currentNode;
        }
        //gives ability to add somewhere other the end of the list
        //pass in both an index and an element
    this.addAt = function(index, element) {
        var node = new Node(element);
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;
        //if we passed in an index longer than length, send false/error
        if (index > length) {
            return false;
        }
        //if zero, add it to head and move current head over
        if (index === 0) {
            node.next = currentNode;
            head = node;
        } else {
            //else find where it will be entered and insert it between the others by relinking
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        length++;
    }

    this.removeAt = function(index) {
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;
        if (index < 0 || index >= length) {
            return null
        }
        if (index === 0) {
            head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next
        }
        length--;
        return currentNode.element;
    }

}

var conga = new LinkedList();
console.log(conga.isEmpty());
conga.add('Kitten');
console.log(conga.isEmpty());
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.elementAt(3));
console.log(conga.indexOf('Puppy'));
console.log(conga.size());

console.log(conga.tail());

console.log(conga.head());
console.log(conga.remove('Kitten'));
console.log(conga.size());