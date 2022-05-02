// Create a function messyMath(num) that will return the following sum: add all integers from 0 up to the given num, except for the following special cases of our count value:
// 1. If current count (not num) is evenly divisible by 3, don’t add to sum; skip to the next count;
// 2. Otherwise, if current count is evenly divisible by 7, include it twice in sum instead of once;
// 3. Regardless of the above, if current count is exactly 1/3 of num, return -1 immediately.

function messMath(num){
    var sum = 0;
    for(var i=1;i<=num;i++){
        sum+=i;

        if(i%3==0){
            continue;
        }
        if(i%7==0){
            sum += i*2;
        }
        if(i == num * (1/3)){
            return -1;
        }
    }
    
    return sum;
}

var result = messMath(10);
console.log(result);