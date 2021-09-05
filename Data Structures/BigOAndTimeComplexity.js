/*
Big O Notation and Time Complexity- https://www.youtube.com/watch?v=D6xkbGLQesk&ab_channel=CSDojo
Describes the time it takes to run an algorithm/function as the size of the input grows. 
In other words, how your function/algorithm scales
The reason why this is important is that it doesn't matter much how an algorithm is made for small inputs, they are all fast enough, 
it's important when there are big input and it has a large effect on time
*/

//image this array can be any size, 100k length etc.
var array = [1, 4, 3, 2, 10, 1, 2, 5, 234, 11];

function getSum(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

/*
so how long does it take to run this function ?
this is a hard question to answer because it depends on different factors, such as length of array, how fast the computer is, are other programs running etc.
So here is a better and more standardized question:
How does the runtime (time it takes to execute code) of this function grow as the size of the input grows?

https://i.imgur.com/hJ6dOBR.png
So in this example, as the size increases the time increases -Linearly- (a straight line)

Time Complexity: Linear Time
*/
console.log(getSum(array));

/*
Other types of Time Complexity:
Constant Time - No increase to time as the input increases (time stays constant)
Quadratic Time - when the time increases as input increases like a quadratic function (Quadratic functions are those where their rate of change changes at a constant rate. )

Big O Notation is expressing these time complexities in a particular notation where:
n = the size of the input/array

O(n) - linear time
O(1) - constant time
O(n^2)- quadratic time

Look at the graph: https://i.imgur.com/5jtVaGz.png
T = an+b is the standard equation for a liner graph (T = time)

Now: 
1. Find the fastest growing term
-which will be faster, a*n or b: a*n so remove b
2. take the coefficient (a numerical or constant quantity placed before and multiplying the variable in an algebraic expression) out of the fastest growing term

-remove a
What remains:
n
so: O(n)

Example 2:
T=cn^2+dn+e
cn^2
n^2
O(n^2)- quadratic time

Example 3: 
https://i.imgur.com/khKbr3m.png
T=c 
c*1
1
O(1) - constant time
*/

/*
Estimating time complexity can be done without plotting graphs like above. 

Look at each line and estimate how long it takes:
*/

function dumbFunction(arr) {
    var unusedArray = arr; //takes some amount of time regardless of array size -> O(1)
    var total = 0; //also constant -> O(1)
    return total; //takes some amount of time regardless of array size -> O(1)
}

console.log(dumbFunction(array));

/*
Now you can add them together:

T = O(1) + O(1) + O(1) = c + c + c = c
c*1
1
O(1)

Now the 1st example again:
*/

function getSumAgain(arr) {
    var sum = 0; // constant = c = O(1)
    for (let i = 0; i < arr.length; i++) { // linear = n = O(n) because it grows with the growth of input
        sum += arr[i]; //constant = c = O(1) // this line will repeat n times based on input because of for loop above
    }
    return sum; // constant = c = O(1)
}

console.log(getSumAgain(array));

/*
T= O(1) + n * O(1) + O(1)
c + n * c + c
n * c + 2c //what is the fastest growing term?
n * c //remove coefficient for 2nd step
n
O(n)

Next Example:
input is 2 dimensional array (an array of arrays)
so it has n columns and n rows =
n*n = n^2

Function finds sum of all numbers in array
*/
var array2d = [
    [1, 4, 3],
    [3, 1, 9],
    [0, 5, 2]
];
var array2d_v2 = [
    [1, 4, 3, 1],
    [3, 1, 9, 4],
    [0, 5, 2, 6],
    [4, 5, 7, 8]
];

function getSum2d(arr1) {
    var sum = 0; // constant = c = O(1)
    for (let i = 0; i < arr1.length; i++) { // linear = n = O(n) because it grows with the growth of input
        for (let f = 0; f < arr1.length; f++) { // linear = n = O(n) because it grows with the growth of input
            sum += arr1[i][f]; // constant = c = O(1)
        }
    }
    return sum; // constant = c = O(1)
}

console.log(getSum2d(array2d));
console.log(getSum2d(array2d_v2));

/*
T = O(1) + n * n + O(1) + O(1)
n^2
O(n^2) - quadratic 

Imagine the function above but instead of 1 double for loop there are 2 (not nested)
T = 2n^2
You still remove 2 as a constant and end up with:
O(n^2) - quadratic 
*/