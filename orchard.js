///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

// create a variable for the total acres and set it to an integer of 0
let totalAcres = 0

// create a for-loop assigned to each type of apple in order to add every number listed in the arrays
// assign a variable to 0 in the first argument of the for-loop
// in the second argument, have the assigned variable be less than the number of items in the array
// add one to the assigned variable in the third argument of the for-loop

// in each iteration of the loop, we want the items in the array to add up
// add and assign each iteration into the empty variable for total acres
for (let i = 0; i < fujiAcres.length; i++) {
    totalAcres += fujiAcres[i]
}
for (let i = 0; i < galaAcres.length; i++) {
    totalAcres += galaAcres[i]
}
for (let i = 0; i < pinkAcres.length; i++) {
    totalAcres += pinkAcres[i]
}

// log the total acres
console.log(totalAcres)


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

// calculate the average by assigning the given variable
// the average is the total divided by the number of items (days) in the array
// log the average
let averageDailyAcres = 0

averageDailyAcres = totalAcres / fujiAcres.length

console.log(averageDailyAcres)


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

// write a while-loop to run while the variable 'acresLeft' is greater than 0
// through each loop:
//  1. minus the average amount days from 'acresLeft' and reassign the variable
//  2. add one to the days and reassign the variable
// log the number of days it takes for the average acres to loop through 'acresLeft'
while (acresLeft > 0) {
    acresLeft -= averageDailyAcres
    days += 1
}

console.log(days)


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

// create 3 empty arrays
// create a variable for the weight (6.5 ton)
// create for-loops for each apple type with 3 arguments to loop through the items in the acres array
// during each loop, add the calculated weight to the empty arrays
// calculate the weight by multiplying the weight variable to every item of the acres array
// log each array 
let fujiTons = []
let galaTons = []
let pinkTons = []

let acreYield = 6.5

for (let x = 0; x < fujiAcres.length; x++) {
    fujiTons.push(fujiAcres[x] * acreYield)
} 
for (let x = 0; x < galaAcres.length; x++) {
    galaTons.push(galaAcres[x] * acreYield)
}
for (let x = 0; x < pinkAcres.length; x++) {
    pinkTons.push(pinkAcres[x] * acreYield)
}

console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE

// assign three different variables for the apple variety by punds to an integer of 0
// create for-loops to go through the items in the array
// in each loop, add and reassign the item in the array
// multiply it all by 2000 to convert it from tons to pounds
// log each weight
let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

for (let x = 0; x < fujiTons.length; x++) {
    fujiPounds += fujiTons[x] * 2000
}
for (let x = 0; x < galaTons.length; x++) {
    galaPounds += galaTons[x] * 2000
}
for (let x = 0; x < pinkTons.length; x++) {
    pinkPounds += pinkTons[x] * 2000
}

console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console.
*/

// CODE HERE
let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log("$", fujiProfit)
console.log("$", galaProfit)
console.log("$", pinkProfit)


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
let totalProfit = 0

totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(totalProfit)
