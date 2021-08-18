/*
 * Priority Queues
 * FIFO - First In First Out
 * Creates 'lines/queues' of various priorities and pulls accordingly
 * The lower the priority number the higher the priority
 * Everything is the same as queues.js except the add and remove function
 */

function PriorityQueue() {
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    //aka - enqueue
    this.add = function(element) {
        //check if the queue is empty using function in this class if so just add the entry
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            //else check the priority of incoming entry and put it in the correct location in the array
            var added = false; //true if an item was added to queue in loop
            for (let i = 0; i < collection.length; i++) {
                //element 1 in the incoming array parameter is the priority value
                // if priority is lower than an item in the being iterated through, add it before it
                if (element[1] < collection[i][1]) {
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            //else add it to the end of the line/queue
            if (!added) {
                collection.push(element);
            }
        }
    };

    //remove/return from front of line - aka dequeue
    this.remove = function() {
        var value = collection.shift();
        return value;
        // or return value[0] for just the value without the priority passed in
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

var pq = new PriorityQueue();
pq.add(['Beau Carnes', 2]);
pq.add(['Quincy Larson', 3]);
pq.add(['Ewa Mitulska-Wójcik', 1])
pq.add(['Briana Swift', 2])
pq.print();
pq.remove();
console.log(pq.front());
pq.print();