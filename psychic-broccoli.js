const myLibrary = [
    new Book("jurasic park", "john jurasic", 1023, false),
    new Book("1984", "george orwell", 532, true),
    new Book("mutant nija tuertle", "jimmy turtlet", 34, false),
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book, library) {
    library.push(book);
}

function displayBook(book, bookIndex) {
    generateBookTemplate(bookIndex);
    const title = document.querySelector(`#B${bookIndex} .title`);
    title.textContent = book.title;

    const author = document.querySelector(`#B${bookIndex} .author span`);
    author.textContent = book.author;

    const pages = document.querySelector(`#B${bookIndex} .pages span`);
    pages.textContent = book.pages;

    const status = document.querySelector(`#B${bookIndex} .status span`);
    status.textContent = (book.read)? "Read": "Unread";
}

function generateBookTemplate(bookID) {
    const bookContainer = document.createElement('div');
    bookContainer.className = 'bookContainer';
    bookContainer.id = `B${bookID}`;

    const title = document.createElement('h2');
    title.className = 'title';
    bookContainer.appendChild(title);

    const author = document.createElement('p');
    author.className = 'author';
    author.innerHTML = 'By <span></span>';
    bookContainer.appendChild(author);

    const pages = document.createElement('p');
    pages.className = 'pages';
    pages.innerHTML = 'No. of pages: <span></span>';
    bookContainer.appendChild(pages);

    const status = document.createElement('p');
    status.className = 'status';
    status.innerHTML = 'Status: <span></span>';
    bookContainer.appendChild(status);

    const removeBtn = document.createElement('button');
    removeBtn.className = 'removeBtn';
    removeBtn.textContent = '- Remove';
    bookContainer.appendChild(removeBtn);

    document.body.appendChild(bookContainer);
}

function displayLibrary(library) {
    for (i = 0; i < library.length; i++) {
        displayBook(library[i], i);
    }
}

const removeBtn = document.querySelectorAll(".bookContainer button");

displayLibrary(myLibrary);