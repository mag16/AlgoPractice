// if user1 has book thast user2 wants, transfer over.

const usersLib = [
    {
        id: 100909,
        name: 'Batman',
        books: ['im rich', 'the menace', 'make money']
    },
    {
        id: 289898,
        name: 'Robin',
        books: ['Bruce Wayne: ', 'stop the joker', 'aloha sam']
    }
];

// for (let book in usersLib.books[1]) {
//     if (book === 'stop the joker') {
        
//     }
// }

function bookSwap(bookReq) {

    //user 1 wants the book "aloha sam" if user2 has it, transfer over.
    // let book = book[i]
    // for (book in userslibrary) {
    //     if (002.books[book] === bookReq) {
    //         001.push(002.books[book]);
    //     } else {
    //         console.log("this user does not have this book title")
    //     }
    // }

    const moveBook = usersLib.filter((book) => book.books === bookReq);
    
    return moveBook;


    //iterate over a user to check if they have the book
    //.filter((book) => book.books === bookReq).pop(bookReq).push(usersLib.books[0])

    //if book present, remove from the user1(--i), .push() to user 2
    
    // const bookFound = usersLibrary.find(book => book === bookReq)
  
        
}


//console.log(bookSwap('the menace'));

//const bookFound = userslibrary.find(book => book === 'aloha sam')

// function isFound(book) {
//     return book.books === 'aloha sam';

 
//console.log(bookFound)
//console.log(userslibrary.find(isFound))

const filterItems = (arr, query) => {
  return arr.filter((el) => el.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1);
};
//console.log(filterItems(usersLib, "aloha sam"));  // ['apple', 'grapes']

//const moveBook = usersLib.filter((book) => book.books === bookReq);

//console.log(usersLib[1].books); //this works..

console.log(bookSwap("aloha sam"))