//A hash table is used to implement associative arrays/mappings of key value pairs
//Very efficient O(n) - the average time for each lookup isn't tied to the# of elements in the table
//The way it works is it takes a key input and then runs it through a hash function
//A has functions maps strings to numbers (index in an array) - it should be consistent so the same string maps to the same number
//A collision is when two different strings when run through the has function have the same index
//One solution to this is store both at the index and then upon lookup loop through the results
//You keep the string/key passed in and save information associated the the output index
//MOST LANGUAGES INCLUDE A HAS DATA STRUCTURES INCLUDING JAVASCRIPT
// all objects in JavaScript are hash tables (https://stackoverflow.com/questions/456932/hash-table-in-javascript):
// var table = { one: [1,10,5], two: [2], three: [3, 30, 300] }
// alert(table['one']); // Will alert with [1,10,5]
// alert(table['one'][1]); // Will alert with 10

//Hash function (simple example - they can get more complicated)
//max parameter is the number of buckets that store values we are going to store in our hash table
var hash = (string, max) => {
    var hash = 0;
    for (let i = 0; i < string.length; i++) {
        //add char code of each character
        hash += string.charCodeAt(i);
    }
    //return remainder of hash / max -this is because we want to get an index value lower than max as a result
    return hash % max;
}

let HashTable = function() {
    let storage = [];
    const storageLimit = 4;

    this.print = function() {
        console.log(storage);
    }

    this.add = function(key, value) {
        //get an index by passing in the key 
        var index = hash(key, storageLimit);
        //if this location is empty add it there
        if (storage[index] === undefined) {
            storage[index] = [
                [key, value]
            ];
        } else {
            //if there is something already in the bucket
            var inserted = false;
            //go through each key value object stored in this location and see if it already exists
            for (var i = 0; i < storage[index].length; i++) {
                //if they key already exists replace the value with the new value
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            //else it doesn't exist add it to this location as a new object in the array
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }
    };
    //just pass key of what you want to remove
    this.remove = function(key) {
        //get index with the key because the has function is predictable
        var index = hash(key, storageLimit);
        //if there is only 1 item in the storage/collection and that one item matches with the key passed in
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            //delete that location
            delete storage[index];
        } else {
            //else iterate through each thing stored at this storage index location and find the right one and delete it
            for (var i = 0; i < storage[index].length; i++) {
                // [index] = storage location, [i] = each item at that location, [0] = the key of the item, [1] at end would be value
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    };

    this.lookup = function(key) {
        var index = hash(key, storageLimit);
        //if empty return undefined
        if (storage[index] === undefined) {
            return undefined;
        } else {
            //else go through each at the location and find the value to return
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    };
}

//hash function test - notice results are always the same
console.log(hash('quincy', 10))

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin')
ht.add('rex', 'dinosour2');
ht.remove('fido');
console.log(ht.lookup('tux'))
console.log(ht.lookup('rex'))
console.log(ht.lookup('fido'))
ht.print(); //notice location 0 and 3 are empty because the above didn't has to those indexes