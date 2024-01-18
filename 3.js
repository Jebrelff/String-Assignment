let str = 'Javascript'

// print the str
console.log('str: ' + str)

/********************* Part-1 *********************/
// printing JS from Javascript with slice
console.log('JS from Javascript with slice: ' + str.slice(0,1) + str.slice(4,5).toUpperCase())

/********************* Part-2 *********************/
// printing JS from Javascript without slice
console.log('JS from Javascript without slice: ' + str[0] + str[4].toUpperCase())

/********************* Part-3 *********************/
let abbreviation = 'JS'
console.log(`The abbreviation for '${str}' is '${abbreviation}'.`)

/********************* Part-4 *********************/
// try chaining 3 or more methods together, and then print the result.
console.log("Chaining 3 methods together (str.split('a').join(' ').toUpperCase()): " + str.split('a').join(' ').toUpperCase())

/********************* Part-5 *********************/
// Use the string methods you know to print 'Title Case' from the string 'title case'.
const capitalize = (str) => {
    let result = str.split(' ').map((ch) => {
        return ch[0].toUpperCase() + ch.slice(1)
    }).join(' ')
    
    return result;
}

let titleCase = 'title case';
console.log('Title Case from title case: ' + capitalize(titleCase))
