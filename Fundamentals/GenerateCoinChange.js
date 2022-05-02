// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). Accept a number of American cents, compute and print how to represent that amount with smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).

function generateCoinChange(cents){
    // creating an object called 'change' that holds the count of each type of coin in American currency for the amount of cents provided in the input.
    var change = {
        'quarters': 0,
        'dimes': 0,
        'nickels': 0,
        'pennies': 0
    }


    change['quarters'] = Math.floor(cents/25); // set the value of key 'quarters' in 'change' object equal to the value of 'cents' that is input into the function divided by 25, which is the currency value of a quarter
    cents = cents % 25; //set our cents variable equal to the remainder of cents divided by the value of a quarter, so that we can move to the next coin
    change['dimes'] = Math.floor(cents/10);
    cents = cents % 10;
    change['nickels'] = Math.floor(cents/5);
    cents = cents % 5;
    change['pennies'] = Math.floor(cents/1);

    return `Quarters: ${change['quarters']}, Dimes: ${change['dimes']}, Nickels: ${change['nickels']}, Pennies: ${change['pennies']} `
}

generate = generateCoinChange(99);
console.log(generate);


