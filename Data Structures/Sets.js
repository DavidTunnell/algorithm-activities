/*
 * Sets
 * similar to array, except no duplicate items and in no particular order
 * has ability to check for the presence/existence of an item
 */
function mySet() {
    var collection = [];

    this.has = function(element) {
        return (collection.indexOf(element) !== -1)
    }

    this.values = function() {
        return collection;
    }

    this.add = function(element) {
        //notice this is using the has function created above
        //only add if it doesn't exist already (doesn't have)
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    }
    this.remove = function(element) {
        //if it exists in the set
        if (this.has(element)) {
            // get index location of where it is in set/collection
            index = collection.indexOf(element);
            //remove the value at that location
            collection.splice(index, 1);
            return true;
        }
        //doesn't exist in collection
        return false;
    }

    this.size = function() {
        return collection.length;
    }

    //up until now es6 has methods comparable to above, below are new ones

    //returns the union (the set of elements in a and b) of two sets as a new set
    this.union = function(otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        //add all values (they wont add duplicates) of both sets
        firstSet.forEach(function(e) {
            unionSet.add(e);
        });
        secondSet.forEach(function(e) {
            unionSet.add(e);
        });
        return unionSet;
    }

    //returns the intersection (the set containing all elements of A that also belong to B) of two sets as a new set
    this.intersection = function(otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        //iterate through each of the current set
        firstSet.forEach(function(e) {
            //if the 2nd set the same value
            if (otherSet.has(e)) {
                // add it to the new set to be returned
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }

    //returns the difference (for A take the ones out that are in B) of two sets as a new set
    //all items in A that are not in B
    //go through each value of A and if it not in B add it to a new return set
    this.difference = function(otherSet) {
        var differenceSet = new mySet();
        var firstSet = this.values();
        //iterate through each of the current set
        firstSet.forEach(function(e) {
            //if the 2nd set does not have the same value
            if (!otherSet.has(e)) {
                // add it to the new set to be returned
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }

    //returns boolean whether A is a subset (A is a subset of another set B if all elements of the set A are elements of the set B) of B
    this.subset = function(otherSet) {
        var firstSet = this.values();
        //every - test whether all elements in the array past the dest provided by the passed function
        //so in this case it will check if all the elements in firstSet pass (boolean) the passed in function
        //are all the elements in firstSet in secondSet
        var isSubset = firstSet.every(function(value) {
            return otherSet.has(value);
        });
        return isSubset;
    }
}

//custom implementation from above
var setA = new mySet();
var setB = new mySet();
setA.add("a");
setA.add("j");
setB.add("a");
setB.add("b");
setB.add("c");
setB.add("d");
console.log(setA.has("b"));
console.log(setA.intersection(setB).values());
console.log(setA.union(setB).values());
var test = setA.difference(setB).values();
console.log(test);
console.log(setA.subset(setB));
console.log(setA.remove("j"));

//es6 - https://2ality.com/2015/01/es6-set-operations.html

var setC = new Set();
var setD = new Set();
setC.add("a");
setC.add("j");
setD.add("a");
setD.add("b");
setD.add("c");
setD.add("d");
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.has("d")); //es6 add does not add true or false but the set itself