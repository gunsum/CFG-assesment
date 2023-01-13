const currentBook = "War and Peace";
let myNextBook = "The Theree Musketeers";

console.log("Finished " + currentBook + ". I'll now start reading " + myNextBook);

currentBook = myNextBook; // Switch to read the queued up book
myNextBook = "All Quiet on the Western Front"; // Line up the next book after

console.log("Now currently reading " + currentBook + ". After I'm finished with this one, I'll be reading " + myNextBook);
