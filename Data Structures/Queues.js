/*
 * Queues
 * FIFO - First In First Out
 * Like a line at the store, those that enter the line 1st leave 1st
 */

function Queue() {
    var collection = [];
    this.print = function() {
        console.log(collection);
    }

    //add to end of line - aka enqueue
    this.add = function(element) {
        collection.push(element);
    }

    //remove/return from front of line - aka dequeue
    this.remove = function() {
        return collection.shift();
    }

    //read 1st in line
    this.front = function() {
        return collection[0];
    }

    this.size = function() {
        return collection.length;
    }

    this.isEmpty = function() {
        return (collection.length === 0);
    }
}

var q = new Queue();
q.add(1);
q.add(2);
q.add(3);
q.print();
q.remove();
console.log(q.front());
q.print();