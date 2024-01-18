/********************* Part-1 *********************/
let num = 1001;

// print the num and its length
console.log('num: ' + num)
console.log('num.length: ' + num.length)

/********************* Part-2 *********************/
// finding the number of digits in num
console.log('Number of digits in num: ' + num.toString().length)

/********************* Part-3 *********************/
num = 123.45

// print the num and its length
console.log('num: ' + num)
console.log('Number of digits in num: ' + (num.toString().length - 1))

/********************* Part-4 *********************/
// Function to find the number of digits in a integer and a floating number
const digitCount = (num) => {
    if (num.toString().includes('.')){
        return (num.toString().length-1);
    }
    return (num.toString().length);
}

// find the number of digits of a number using digitcount function
console.log('Number of digits in 123.45: ' + digitCount(123.45))
console.log('Number of digits in 1001: ' + digitCount(1001))
