/*
 * Create a function that takes two arrays and returns a new array that is the intersection of both arrays. 
 * An array intersection in this activity is defined as the set of same-number pairs between both arrays. 
 * There might be multiple pairs of the same number between both arrays, so a number might appear more than one time in the result.
 */
const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6]; //[3, 4]

const c = [8, 88, 8, 90, 91, 8];
const d = [90, 8, 8, 15, 3]; //[90, 8, 8]

var arrayIntersection = function(a, b) {
    const returnArray = [];
    a.forEach((aEle, i) => {
        b.forEach((bEle, f) => {
            if (aEle == bEle) {
                returnArray.push(aEle);
                b.splice(f, 1);
            }
        });
    });
    return returnArray;
}

console.log(arrayIntersection(a, b));
console.log(arrayIntersection(c, d));