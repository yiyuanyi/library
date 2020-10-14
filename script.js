const library = document.querySelector('#library');
const addBook = document.querySelector('#add-book');

let myBooks = [
    {
        title: 'A Little Life',
        author: 'Hanya Yanagihara',
        year: 2015,
        status: 'read'
    }, 
    {
        title: 'Dance Dance Dance',
        author: 'Haruki Murakami',
        year: 1988,
        status: 'read'
    },
    {
        title: 'The Wolf of Wall Street',
        author: 'Jordan Belfort',
        year: 2007,
        status: 'not read'
    }

];

function Book(title, author, year, status) {
    this.title = title,
    this.author = author,
    this.year = year,
    this.status = status
}

function addBookToLibrary() {
    let newBook = new Book(title, author, year, status);
    myLibrary.push(newBook);
}

function renderLibrary(myBooks) {
    for (i = 0; i < myBooks.length; i++) {
        renderCard();
    }
}

function renderCard() {
    //make card
    //add card to #library DOM
}