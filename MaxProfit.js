/* Create create a function that takes in an array of numbers each representing the price of a stock on a different day.
 * Return the maximum profit that can be made from a single purchase of stock on one day and a single sale on a later day.
 * Assume the array will only contain non-negative integers.
 */
var arr = [1, 6, 7, 9]; //8
var arr2 = [9, 7, 4, 1]; //0 -Since the stock decreases every day, there is no possible profit to be made.
var arr3 = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
    var smallestValue = prices[0];
    var smallestIndex = 0;
    var largestValue = 0;
    var largestIndex = 0;
    for (let i = 0; i < prices.length; i++) {
        if (smallestValue > prices[i]) {
            smallestValue = prices[i];
            smallestIndex = i;
        }
    }
    for (let f = smallestIndex; f < prices.length; f++) {
        if (largestValue < prices[f]) {
            largestValue = prices[f];
            largestIndex = f;
        }
    }
    if (smallestIndex > largestIndex) {
        return 0;
    } else {
        return largestValue - smallestValue;
    }
};

console.log(maxProfit(arr));
console.log(maxProfit(arr2));
console.log(maxProfit(arr3));
