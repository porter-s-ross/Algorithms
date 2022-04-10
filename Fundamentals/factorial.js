// Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive)

function factorial(num) {
    fact = 1;
     // setting a variable named fact equal to 1 
    for (let i = 0; i < num; i++) { //looping through all positive integers up to num
        fact += fact * i; //setting fact equal to the value of fact + the value of fact * i
    }
    return fact //return sum outside of loop
}

//setting variables equal to the callback of the function 
testResult1 = factorial(3);
testResult2 = factorial(5);
testResult3 = factorial(10);

// logging the returned values that have been set to the testResult variables
console.log(testResult1);
console.log(testResult2);
console.log(testResult3);