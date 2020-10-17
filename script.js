const library = document.querySelector('#library');
const newBook = document.querySelector('#new-book');
const addBook = document.querySelector('#add-book');
const closeBtn = document.querySelector('#close');

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
    document.getElementById('title').value = title,
    document.getElementById('author').value = author,
    document.getElementById('year').value = year,
    document.getElementById('status').value = status
}

function addBookToLibrary() {
    let newBook = new Book(title, author, year, status);
    myLibrary.push(newBook);
    console.log('added book');
}

function renderLibrary(myBooks) {
    for (i = 0; i < myBooks.length; i++) {
        renderCard(myBooks[i]);
    }
}

function renderCard(title, author, year, status) {
    //make card
    //add card to #library DOM
    let card = document.createElement('div');
    card.classList.add('card');
    let header = document.createElement('h2');
    let para = document.createElement('p');
    
}

function openForm() {
    document.getElementById('book-details').classList.remove('hidden');
}

function closeForm() {
    document.getElementById('book-details').classList.add('hidden');
}

newBook.addEventListener('click', openForm);
addBook.addEventListener('click', addBookToLibrary);
closeBtn.addEventListener('click', closeForm);

