// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Prototype functions
UI.prototype.addBookToList = function (book) {
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</td>
  `;
  UIbookList.appendChild(row);
};

// Show alert
UI.prototype.showAlert = function (message, className) {
  // Create div
  const div = document.createElement('div');
  div.className = `alert ${className}`;

  // Add text
  div.appendChild(document.createTextNode(message));
  // Insert alert
  UIcontainer.insertBefore(div, UIbookForm);

  // TImeout after 3 sec
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 2000);
};

// Delete Book
UI.prototype.deleteBook = function (target) {
  target.parentElement.parentElement.remove();
};
// Clear fields
UI.prototype.clearFields = function () {
  UItitle.value = '';
  UIauthor.value = '';
  UIisbn.value = '';
};

// Get all the required document elements
const UIbookForm = document.querySelector('#book-form'),
  UItitle = document.querySelector('#title'),
  UIauthor = document.querySelector('#author'),
  UIisbn = document.querySelector('#isbn'),
  UIbookList = document.querySelector('#book-list'),
  UIcontainer = document.querySelector('.container');

// Event Listeners
UIbookForm.addEventListener('submit', submit);
UIbookList.addEventListener('click', deleteBook);
// Functions
function submit(e) {
  // Get form values
  const title = UItitle.value,
    author = UIauthor.value,
    isbn = UIisbn.value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  if (title === '' || author === '' || isbn === '') {
    // Eroor alert
    ui.showAlert('Please fill all the fields...', 'error');
  } else {
    // Add book to ui list
    ui.addBookToList(book);
    ui.showAlert('Book Added', 'success');
    // Clear fields
    ui.clearFields();
  }
  e.preventDefault();
}

// Delete book
function deleteBook(e) {
  if (e.target.className === 'delete') {
    // Instantiate UI
    const ui = new UI();

    ui.deleteBook(e.target);
    ui.showAlert('Book Removed', 'success');
    e.preventDefault();
  }
}
