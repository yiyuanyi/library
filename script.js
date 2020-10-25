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

function Book() {
    this.title = title.value,
    this.author = author.value,
    this.year = year.value,
    this.status = status.checked == true ? 'read' : 'not read';
}

Book.prototype.changeStatus = function() {
    this.status == 'read' ? this.status = 'not read': this.status = 'read';
    refreshLibrary();
}

function addBookToLibrary() {
    let newBook = new Book();
    myBooks.push(newBook);
    let i = myBooks.length-1;
    renderCard(i);
    formDetails.reset();
    closeForm();
}

function renderLibrary() {
    for (i = 0; i < myBooks.length; i++) {
        renderCard(i);
    }

    const statusBtn = document.getElementsByClassName('status-btn');
    for (let i = 0; i < statusBtn.length; i++) {
        statusBtn[i].addEventListener('click', (e) => {        
            let index = e.target.parentNode.getAttribute('data-key');
            myBooks[index].changeStatus();
        });
    }
    
    const removeBtn = document.getElementsByClassName('remove-btn');
    for (let j = 0; j < removeBtn.length; j++) {
        removeBtn[j].addEventListener('click', removeBook);
    }
}

function renderCard(i) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-key', i);
    library.appendChild(card);

    let remove = document.createElement('button');
    remove.innerHTML = 'X';
    remove.classList.add('remove-btn');
    remove.setAttribute('type','button');
    card.appendChild(remove);

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
    read.setAttribute('type','button');
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

function removeBook(e) {
    let index = e.target.parentNode.getAttribute('data-key');
    myBooks.splice(index, 1);
    refreshLibrary();
}

function removeCards() {
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }    
}

function refreshLibrary() {
    removeCards();
    renderLibrary();
}

/*function changeStatus(e) {
    let index = e.target.parentNode.getAttribute('data-key');
    myBooks[index].status == 'read' ? myBooks[index].status = 'not read' : myBooks[index].status = 'read';
    removeCards();
    renderLibrary();
}*/

window.addEventListener('load', renderLibrary);
newBook.addEventListener('click', openForm);
addBook.addEventListener('click', addBookToLibrary);
closeBtn.addEventListener('click', closeForm);