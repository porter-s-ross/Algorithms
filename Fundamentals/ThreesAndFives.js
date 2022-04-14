// Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.

function threeFives(){
    var sum = 0;
    for(var i=100; i<=4000000; i++){
        if(i%3==0 || i%5==0){
            if(i%15==0){
                // console.log("This value is divisible by both 3 and 5, don't add to sum")
                continue
            }
            sum += i;
            // console.log(i)
        }
    }
    return sum
}

output = threeFives();
console.log(output);



// Second: Create betterThreesFives(start,end) that allows you to enter arbitrary start and end values for your range. Think of threesFives()as betterThreesFives(100,4000000).

function betterThreesFives(start, end){
    var sum = 0;
    for(var i=start; i<=end; i++){
        if(i%3==0 || i%5==0){
            if(i%15==0){
                console.log("This value is divisible by both 3 and 5, don't add to sum")
                continue
            }
            sum += i;
            console.log(i)
        }
    }
    return sum
}

start = 3;
end = 59;
output2 = betterThreesFives(start,end);
console.log(output2);
