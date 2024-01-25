const myLibrary = [
    new Book("jurasic park", "john jurasic", 1023, false),
    new Book("1984", "george orwell", 532, true)
];

function Book(title, author, pages, read) {
  // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

function displayBook(book, bookIndex) {
    generateBookTemplate(bookIndex);
    const title = document.querySelector(`#B${bookIndex} .title`);
    title.textContent = book.title;

    const author = document.querySelector(`#B${bookIndex} .author span`);
    author.textContent = book.author;

    const pages = document.querySelector(`#B${bookIndex} .pages span`);
    pages.textContent = book.pages;
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
    status.innerHTML = 'Status: ';

    // Adding a Status Select
    const select = document.createElement('select');
    select.className = 'status-select';

    optionRead = document.createElement('option');
    optionRead.setAttribute('value', 'read');
    optionRead.textContent = 'Read';
    select.appendChild(optionRead);

    optionUnread = document.createElement('option');
    optionUnread.setAttribute('value', 'unread');
    optionUnread.textContent = 'Unread';
    select.appendChild(optionUnread);

    optionMidway = document.createElement('option');
    optionMidway.setAttribute('value', 'midway');
    optionMidway.textContent = 'Midway';
    select.appendChild(optionMidway);

    status.appendChild(select);
    bookContainer.appendChild(status);

    document.body.appendChild(bookContainer);
}
const newBook = new Book('peepeebook', 'mrpeepee', 1001, true);
displayBook(newBook, 80);