// https://www.youtube.com/watch?v=y24nMGNkkPo - learning from here
// Whiteboarding Interview Questions - https://coding-bootcamp-whiteboarding-algorithms.readthedocs-hosted.com/en/latest/modules/whiteboarding-example/
// 9. Define a Function that Returns the nth Line of Pascal's Triangle
// Pascal's triangle is an arithmetic and geometric figure. Its first few rows look like this:
//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1
// Where each element of each row is either 1 or the sum of the two elements right above it.

//declare an array of size (numRows) - an input of x should result in x rows being generated

//generate each row (row by row)
//row[0] will = 1
//row[row.length - 1] = 1
//to generate row x you need to look at the previous row (if you are on row n, look at n-1 )
//so if you are looking at row 4 to generate row 5:
// [1, 3, 3, 1]
//[1, j, _, _, _, 1]
//    ^ we need to add j and j-1 from the previous row

function pascalsNthRow(numRows) {

    //declare an array of size inputInt 
    let pascalsTriangle = new Array(numRows);

    //generate each row (row by row)
    for (let i = 0; i < numRows; i++) {
        //create an array for the current row being generated (starts a size of 1 because it's the top of the triangle)
        let currentRow = new Array(i + 1);
        //the 1st and last value of the row will always be 1
        currentRow[0] = 1;
        currentRow[currentRow.length - 1] = 1;

        //now generate values from previous row between the 1st and last array location
        //start at 1 because we already have the 1st value (1), we also subtract one from the final value we iterate to because the last value is also known (1)
        for (let j = 1; j < currentRow.length - 1; j++) {
            //get previous row (this is added to pascalsTriangle array the 1st time by rows 33, 34)
            let rowAbove = pascalsTriangle[i - 1];
            //get the value to add next to the row by adding the row aboves j and j - 1.
            //NOTE: the 1st value is skipped and then the ++ moves j along to do this for each needed value minus the last one because of currentRow.length - 1
            currentRow[j] = rowAbove[j] + rowAbove[j - 1];
        }
        //now that the current row is generated add it to pascals triangle array
        //THIS IS WHERE the rows are being added to the pascals triangle array. 
        //The 1st time it will use currentRow[0] = 1; currentRow[currentRow.length - 1] = 1; (the same) and add it and then go from there. 
        //In other words the j loop will be skipped the 1st time because currentRow.length - 1 will be less than j
        pascalsTriangle[i] = currentRow;
    }
    return pascalsTriangle;
}

function main(inputInt) {
    var result = pascalsNthRow(inputInt);
    console.log("Full Triangle:");
    console.log(result);
    console.log("Requested Row " + inputInt + ": " + result[inputInt - 1]);
}

//enter how many levels when running program in console - EX: node .\PascalsTriangle.js 6
const args = process.argv.slice(2);
main(args[0]);