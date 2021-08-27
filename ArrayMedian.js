/** 
 * https://app.codesignal.com/test/Ao2n4a3y3tcLvCBYS/task/D6CMhMtFpzdyTzdJ9
 * THERE IS AN ERROR IN THIS SITES TESTS.  [-1, 3, -2, 2] mean should be 0 not 0.5 because (-2 + 2)/2 = 0
 * Given a sequence of integers, find its median.
 * The median of an N-element sequence is defined as follows: If N is odd, the median is the element which stands in the middle of the sequence after it is sorted. If N is even, the median is the average (mean) of the two "middle" elements of the sequence after it is sorted.
 * For sequence = [-1, 3, -2, 2], the output should be arrayMedian(sequence) = 0.5; << Should be 0
 * For sequence = [1, 3, 2], the output should be arrayMedian(sequence) = 2
 */
const a = [-1, 3, -2, 2]; //0 (not 0.5)
const b = [1, 3, 2]; //2
const c = [1, 1]; //1
const d = [-50, 50, -25, 25, -1, 1, -100, 100]; //-24.5 (not 0)
const e = [0, -2, 15, -125, 85, 90, -63, -233, 186, 926, -330, 37]; //7.5
var arrayMedian = function(array) {
    array.sort();
    if (array.length % 2 == 0) { //even length
        let sum = 0;
        sum = array[(array.length / 2) - 1] + array[(array.length / 2)]
        return sum / 2
    } else { //odd length
        return array[Math.round((array.length - 1) / 2)];
    }
};

console.log(arrayMedian(a));
console.log(arrayMedian(b));
console.log(arrayMedian(c));
console.log(arrayMedian(d));
console.log(arrayMedian(e));