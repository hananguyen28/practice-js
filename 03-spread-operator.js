import { books } from "./books.js";

/*3.1
Each book object has the author property, which stores an array of strings (author names) if there are multiple authors,
or a single string (author name) if there is just one author.
Declare an array called bookAuthors, and fill it with authors of the first two books from the books array.
The bookAuthors array should have just one level (no nested arrays).*/
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

/*3.2
Write a function called spellWord that accepts a single string as an argument. 
This function should log to the console each letter of the argument separated by a space.*/
function spellWord(string) {
    console.log(...string)
}

spellWord('JavaScript');

//other 
const arr = [1, 2, 3, 4]
const newArr = [...arr, 5, 6]
console.log(newArr);
const [first] = newArr
console.log(first)