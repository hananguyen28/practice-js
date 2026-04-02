import { books } from "./books.js";

/*4.1
Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. 
The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).*/
const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

/*4.2
Destructure the second book from the books array into a variable called bookPublisher. 
The bookPublisher variable should be assigned with the value of the publisher property of the book object. 
Assign the rest of the properties to the restOfTheBook variable.*/
const {publisher: bookPublisher, ...restOfTheBoook} = books[1];
console.log(bookPublisher, restOfTheBoook)

/*4.3
Write a function called printBookAuthorsCount that has two parameters called title and authors. 
The authors parameter should accept any number of arguments. 
This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".*/
function printBookAuthorsCount(title, ...authors){
    console.log(`The book "${title}" has ${authors.length} authors`)
    console.log(authors)
}
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
//Explain: authors sẽ gom tất cả argument còn lại thành 1 array, nó là rest parameter. Js sẽ tự hiểu 

//other
function printBookAuthorsCount2({title, authors}){
    console.log(`The book "${title}" has ${authors.length} authors`)
    console.log(authors)
}
printBookAuthorsCount2({title: 'Algorithms', authors: ['Robert Sedgewick', 'Kevin Wayne']});
