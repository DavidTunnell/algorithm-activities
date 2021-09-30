/* You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * https://leetcode.com/problems/climbing-stairs/
 */
var a = 2; //2 - Explanation: There are two ways to climb to the top.| 1. 1 step + 1 step | 2. 2 steps
var b = 3; //3 - Explanation: There are three ways to climb to the top. | 1. 1 step + 1 step + 1 step | 2. 1 step + 2 steps | 3. 2 steps + 1 step
var c = 4; // | 1. 1 step + 1 step + 1 step + 1 step | 2. 1 step + 1 step + 2 steps | 3. 2 steps + 1 step + 1 step | 4. 2 steps + 2 steps | !5. 1 step + 2 steps + 1 step
var d = 5;
// 1. 1 step + 1 step + 1 step + 1 step + 1 step
// 2. 1 step + 1 step + 1 step + 2 steps | 3. 2 steps
// 3. 1 step + 2 steps + 2 steps 
var climbStairs = function (n) {
    //check how many times 2 goes into n
    //for each time, there can be 2 ways to take the steps to the steps
    //then if the number is odd add 1 possible step to the end of the
    // var test = 5 / 2;
    // if (n % 2 == 0) {
    //     return n;
    // }
    // return n + 1;
    //every 3 maybe has a number of paths
    //maybe approach it 
};

console.log(climbStairs(a));
console.log(climbStairs(b));
console.log(climbStairs(c));
