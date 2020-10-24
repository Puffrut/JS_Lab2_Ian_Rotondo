// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(num){
    return num **2
}

let theResult = squareNumber(34)
console.log (`The square root of the number is: ${theResult}`)


// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(num){
    
    return num / 2

}

let finalSum = halfNumber(62)
let firstNum = finalSum * 2
console.log (`Half of ${firstNum} is ${finalSum}`)


// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(firstNumber,secNumber){
    return firstNumber / secNumber *100
}
let firstNumber = 700
let secNumber = 900
let pOf = percentOf(firstNumber,secNumber)
console.log (`${firstNumber} is ${pOf}% of ${secNumber}`)

// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle(radius){
    return Math.PI * radius ** 2
}


let circleRadius = 100
let circleArea = areaOfCircle(circleRadius)
let roundNum = circleArea.toFixed(2)
console.log (`The area for a circle with a radius of ${circleRadius} is ${roundNum}`)


// EXERCISE 5
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area is of the squared result (#3).

function multiFunc(num){
    

    
    let half = halfNumber(num)
    let squared = squareNumber(half)
    let area = areaOfCircle(squared)
    let perc = percentOf(squared, area)
    let finalResult = [half, squared, area, perc]
    return finalResult
}

let num = 100
let gotEm = multiFunc(num)
console.log (`half of ${num} is ${gotEm[0]}, ${gotEm[0]} squared equals ${gotEm[1]}. If ${gotEm[1]} were the radius of a circle then ${gotEm[2].toFixed(2)} is the area. The percentage of the area is ${gotEm[3].toFixed(2)}. `)


