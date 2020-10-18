const library = document.querySelector('#library');
const newBook = document.querySelector('#new-book');
const addBook = document.querySelector('#add-book');
const status = document.querySelector('#status');
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

function checkStatus() {
    return status.checked == true ? 'read' : 'not read';
}

function Book() {
    this.title = title.value,
    this.author = author.value,
    this.year = year.value,
    this.status = checkStatus()
}

function addBookToLibrary() {
    let newBook = new Book();
    myBooks.push(newBook);
    renderLibrary(myBooks);
}

function renderLibrary() {
    myBooks.forEach(renderCard);
}

function renderCard() {
    let card = document.createElement('div');
    card.classList.add('card');
    library.appendChild(card);
}

function openForm() { document.getElementById('book-details').classList.remove('hidden');}

function closeForm() { document.getElementById('book-details').classList.add('hidden');}

window.addEventListener('load', renderLibrary);
newBook.addEventListener('click', openForm);
addBook.addEventListener('click', addBookToLibrary);
closeBtn.addEventListener('click', closeForm);


