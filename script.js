const library = document.querySelector('#library');
const newBook = document.querySelector('#new-book');
const addBook = document.querySelector('#add-book');
const status = document.querySelector('#status');
const closeBtn = document.querySelector('#close');
const formDetails = document.querySelector('#book-details');

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
    let i = myBooks.length-1;
    renderCard(i);
    formDetails.reset();
}

function renderLibrary() {
    for (i = 0; i < myBooks.length; i++) {
        renderCard(i);
    }
}

function renderCard(i) {
    let card = document.createElement('div');
    card.classList.add('card');
    library.appendChild(card);

    let header = document.createElement('h2');
    header.innerHTML = myBooks[i].title;
    card.appendChild(header);

    let author = document.createElement('p');
    author.innerHTML = myBooks[i].author;
    card.appendChild(author);

    let year = document.createElement('p');
    year.innerHTML = myBooks[i].year;
    card.appendChild(year);

    let read = document.createElement('button');
    read.classList.add('status-btn');
    if (myBooks[i].status == 'read') {
        read.classList.add('read');
    } else {
        read.classList.add('not-read');
    }
    read.innerHTML = myBooks[i].status;
    card.appendChild(read);
}

function openForm() { document.getElementById('book-details').classList.remove('hidden');}

function closeForm() { document.getElementById('book-details').classList.add('hidden');}

window.addEventListener('load', renderLibrary);
newBook.addEventListener('click', openForm);
addBook.addEventListener('click', addBookToLibrary);
closeBtn.addEventListener('click', closeForm);


