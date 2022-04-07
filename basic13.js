// Basic 13 Algorithms


// print integers 1-255
function print1thru255(){
    for(var i = 0; i<=255; i++){
        console.log(i)
    }
}


//Print integers from 0 to 255, and with each integer print the sum so far.
function printIntsAndSum0To255(){
    var sum = 0;
    for(var i=0; i<=255; i++){
        console.log(i);
        sum += i;
        console.log(sum);
    }
} 


// Given an array, find and print its largest element.
function printMaxOfArray(arr){
    var max = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    console.log(max)
}


// Create an array with all the odd integers between 1 and 255 (inclusive).
function returnOddsArray1To255(){
    var arr = [];
    for(var i=0; i<=255; i++){
        if(i%2!=0){
            arr.push(i);
        }
    }
    return arr;
}


// Given an array and a value Y, count and print the number of array values greater than Y.
function returnArrayCountGreaterThanY(arr, y){
    var count=0;
    for(var i =0; i<arr.length; i++){
        if(y > arr[i]){
            count++;
            console.log(i);
        }
    }
    console.log(`There are ${count} values greater than Y`);
    return count;
    // return console.log(`There are ${count} values greater than Y`);
}


// Given an array, print the max, min and average values for that array.
function printMaxMinAverageArrayVals(arr){
    max = 0;
    min = 0;
    sum = 0;
    average = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
        if(arr[i]<min){
            min = arr[i]
        }
        sum += arr[i];
    }
    average = sum / arr.length-1;
    console.log(max, min, average)
}


// call functions

testArr = [0,5,16,1,4,602,15,11];

// print1thru255();
// printIntsAndSum0To255();

// printMaxOfArray(testArr);

// console.log(returnOddsArray1To255());

// console.log(returnArrayCountGreaterThanY(testArr,6));

printMaxMinAverageArrayVals(testArr);