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

function displayBook(book) {
    const div = document.createElement("div");
    div.className = "book";

    const title = document.createElement("h2");
    title.className = "title";
    title.textContent = book.title;

    const author = document.createElement("p");
    author.className = "author";
    author.textContent = `By ${book.author}`;

    const pages = document.createElement("p");
    pages.className = "pages";
    pages.textContent = `No. of pages: ${book.pages}`; 


    const read = document.createElement("p");
    read.className = "read";
    read.textContent = (book.read)? `Status: read`: `Status: unread`;

    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);

    document.body.appendChild(div);
}

displayBook(myLibrary[0]);
