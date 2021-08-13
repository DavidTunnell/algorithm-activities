// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

const mostSongsInPlaylist = (arr) => {
    // lines 6-17 can be removed and the array will still function, they just make it a bit faster for short or empty arrays
    //if empty return 0
    if (arr.length === 0) {
        return 0;
    }
    //if sum is less than 60 return length
    // https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
    const totalSum = arr.reduce((a, b) => a + b, 0);
    if (totalSum <= 60) {
        return arr.length;
    }
    // else return the max number of values that fit in 60
    // return values sorted from low to high - https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
    arr = arr.sort((a, b) => a - b);
    console.log(arr);
    //sum until <= 60 and return how many it took
    let counter = 0;
    let sum = 0;
    while (sum <= 60) {
        sum += arr[counter];
        counter++;
        console.log(sum);
    }
    //subtract 1 because while loop will run one extra time before 60
    return counter - 1;
}