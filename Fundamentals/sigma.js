// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive)

function sigma(num){
    let sig = 0; // setting a variable named sum equal to zero
    for(let i = 0; i<num; i++){ //looping through all positive integers up to num
        sig = sig + i+1; 
        // console.log(sig)
    }
    return sig //return sum outside of loop
}

//setting variables equal to the callback of the function 
testResult1 = sigma(3);
testResult2 = sigma(5);
testResult3 = sigma(10);

// logging the returned values that have been set to the testResult variables
console.log(testResult1);
console.log(testResult2);
console.log(testResult3);