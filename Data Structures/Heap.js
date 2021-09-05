//Heap aka Binary Heap
// a common use case is the heap sort function
// ONE OF THE MOST EFFICIENT SORTING ALGORITHMS - average and worst case: O(n\log n)
//
//a partially ordered binary tree which satisfies the heap property
//-the heap property indicates a specific relationship between the parent and child nodes
//-a max heap where all parent nodes are >= child nodes
//-or a min heap where are child nodes are >= parent nodes
//there are similarities to the binary search tree but the order of it is different
//-each node has at most two child nodes
//-the order on the same level of the tree doesn't matter
//-full binary tree - meaning that all levels of the tree are fully filled first and then the next level is partially filled from left to right
//-sometimes implemented with a node structure like binary search tree, though more often as arrays
//--https://i.imgur.com/rFVl38G.png, see array representation at bottom
//--index location zero is set to null to make math easier when representing heap in an array
//--the algorithm to find the array locations the tree is
//--- left child: i * 2
//--- right child: i * 2 + 1
//--- parent: floor(i / 2) - to round down after division
//when new values are inserted the order of the tree itself to maintain the rules of order (min or max heap above) 
//remove doesn't take an argument, it removes the root node and then sorts to make sure the rules of the tree are maintained. Thus for min heap the smallest value will be removed.
//then it takes the last node/position in array and moves it to the beginning and then sorts

let MinHeap = function() {

    let heap = [null];

    this.insert = function(num) {
        heap.push(num);
        if (heap.length > 2) {
            let idx = heap.length - 1;
            while (heap[idx] < heap[Math.floor(idx / 2)]) {
                if (idx >= 1) {
                    [heap[Math.floor(idx / 2)], heap[idx]] = [heap[idx], heap[Math.floor(idx / 2)]];
                    if (Math.floor(idx / 2) > 1) {
                        idx = Math.floor(idx / 2);
                    } else {
                        break;
                    };
                };
            };
        };
    };

    this.remove = function() {
        let smallest = heap[1];
        if (heap.length > 2) {
            heap[1] = heap[heap.length - 1];
            heap.splice(heap.length - 1);
            if (heap.length == 3) {
                if (heap[1] > heap[2]) {
                    [heap[1], heap[2]] = [heap[2], heap[1]];
                };
                return smallest;
            };
            let i = 1;
            let left = 2 * i;
            let right = 2 * i + 1;
            while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
                if (heap[left] < heap[right]) {
                    [heap[i], heap[left]] = [heap[left], heap[i]];
                    i = 2 * i
                } else {
                    [heap[i], heap[right]] = [heap[right], heap[i]];
                    i = 2 * i + 1;
                };
                left = 2 * i;
                right = 2 * i + 1;
                if (heap[left] == undefined || heap[right] == undefined) {
                    break;
                };
            };
        } else if (heap.length == 2) {
            heap.splice(1, 1);
        } else {
            return null;
        };
        return smallest;
    };

    this.sort = function() {
        let result = new Array();
        while (heap.length > 1) {
            //the remove is always the root and lowest value
            result.push(this.remove());
        };
        return result;
    };

};

let MaxHeap = function() {

    let heap = [null];

    this.print = () => heap;

    this.insert = function(num) {
        heap.push(num);
        if (heap.length > 2) {
            let idx = heap.length - 1;
            while (heap[idx] > heap[Math.floor(idx / 2)]) {
                if (idx >= 1) {
                    [heap[Math.floor(idx / 2)], heap[idx]] = [heap[idx], heap[Math.floor(idx / 2)]];
                    if (Math.floor(idx / 2) > 1) {
                        idx = Math.floor(idx / 2);
                    } else {
                        break;
                    };
                };
            };
        };
    };

    this.remove = function() {
        let smallest = heap[1];
        if (heap.length > 2) {
            heap[1] = heap[heap.length - 1];
            heap.splice(heap.length - 1);
            if (heap.length == 3) {
                if (heap[1] < heap[2]) {
                    [heap[1], heap[2]] = [heap[2], heap[1]];
                };
                return smallest;
            };
            let i = 1;
            let left = 2 * i;
            let right = 2 * i + 1;
            while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
                if (heap[left] > heap[right]) {
                    [heap[i], heap[left]] = [heap[left], heap[i]];
                    i = 2 * i
                } else {
                    [heap[i], heap[right]] = [heap[right], heap[i]];
                    i = 2 * i + 1;
                };
                left = 2 * i;
                right = 2 * i + 1;
                if (heap[left] == undefined || heap[right] == undefined) {
                    break;
                };
            };
        } else if (heap.length == 2) {
            heap.splice(1, 1);
        } else {
            return null;
        };
        return smallest;
    };
};

var heap = new MinHeap();
heap.insert(100);
heap.insert(5);
heap.insert(4);
heap.insert(1);

// console.log(heap.sort()); //destroys the heap to create this currently
console.log(heap.remove());
console.log(heap.sort());