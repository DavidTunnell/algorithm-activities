const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15];

function binarySearch(array, element) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] === element) {
            return mid; //could also return true here depending on need
        } else if (array[mid] < element) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1; //or false
}
console.log(binarySearch(arr, 12));
console.log(binarySearch(arr, 13));
