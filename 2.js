let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT ";

/********************* Part-1 *********************/
// remove leading and traiing spaces
// start and end indexes of the DNA string
let start = 0, end = dna.length - 1; 

// skip Leading White Spaces
while(dna[start] === ' ') start++;

// skip Trailing White Spaces
while(dna[end] === ' ') end--;

// temp string for storing the string without leading and trailing white spaces
let temp = '';

// copy the string without leading and trailing white spaces
while(start <= end) {
    temp += dna[start];
    start++;
}

console.log("String before:\n\n" + dna + "\n\nLength:" + dna.length);

// copy the temp string to dna string
dna = temp;

// Print the result
console.log("String after removing the leading and trailing white spaces:\n\n" + dna + "\n\nLength:" + dna.length);


/********************* Part-2 *********************/
// change the dna string to uppercase
dna = dna.toUpperCase()

// Print the result
console.log("String after converting to uppercase:\n\n" + dna);


/********************* Part-3 *********************/
// Replace the sequence 'GCT' with 'AGG', and then print the altered strand.
dna = dna.replace('GCT', 'AGG')

// Print the result
console.log("String after replacing 'GCT' with 'AGG':\n\n" + dna);


/********************* Part-4 *********************/
// Search for CAT in the dna string
let isCatPresent = false;

for(let index = 0; index + 2 < dna.length; index++) {
    if(dna[index] === 'C' && dna[index + 1] === 'A' && dna[index + 2] === 'T') {
        isCatPresent = true;
    }
}

// Print the result
console.log("is CAT present in the dna string: "+ (isCatPresent? 'CAT found': 'CAT NOT found'));


/********************* Part-5 *********************/
// Printing fifth set of 3 characters, also called a codon
console.log("Fifth set of 3 characters: " + dna[16] + dna[17] + dna[18]);


/********************* Part-6 *********************/
// Printing the length of the dna string
console.log("The DNA strand is " + dna.length + " characters long.")


/********************* Part-7 *********************/
// Printing taco cat
console.log("Printing taco cat: " + dna[4].toLowerCase() + dna[5].toLowerCase() + dna[6].toLowerCase() + 'o' + ' ' + dna[40].toLowerCase() + dna[41].toLowerCase() + dna[42].toLowerCase());
