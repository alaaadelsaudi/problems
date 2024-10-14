const numbers = [1, 2, 3, 4, 5, 6, 7, 8,9 ,10];
// EX:1
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers); 

// EX:2
function largestNumber (numbers){
  return  Math.max(...numbers)
}
const evenLarg= largestNumber(numbers)
console.log (evenLarg)

// EX:3
function reverseString(str) {
    return str.split('').reverse().join('')
}

const inputString = "laila";
const reversedString = reverseString(inputString);
console.log(reversedString); 

// EX:4
function removeDuplicates(numbersDuplicats) {
    return [...new Set(numbersDuplicats)];
}
const numbersDuplicats = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = removeDuplicates(numbersDuplicats);
console.log(uniqueNumbers);


