import { useState, useEffect } from "react";
import { getBooks, updateBookAPI } from "../services/booksAPI";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

const BookShelfPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((books) => setBooks(books));
  }, []);

  const currentlyReadingBooks = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToReadBooks = books.filter((book) => book.shelf === "wantToRead");
  const readBooks = books.filter((book) => book.shelf === "read");

  const updateBookHandler = (id, shelf) => {
    updateBookAPI(id, shelf)
      .then((response) => getBooks())
      .then((books) => setBooks(books));
  };

  // this is spelled incorrectly ON PURPOSE to match the singular variable
  // English is dumb.
  // TODO: use a loop for Bookshelf components below
  const shelfs = ["Currently Reading", "Want to Read", "Read", "None"];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MITTReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            title="Currently Reading"
            books={currentlyReadingBooks}
            updateBookHandler={updateBookHandler}
          />
          <BookShelf
            title="Want to Read"
            books={wantToReadBooks}
            updateBookHandler={updateBookHandler}
          />
          <BookShelf
            title="Read"
            books={readBooks}
            updateBookHandler={updateBookHandler}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="search">Add a book</Link>
      </div>
    </div>
  );
};

export default BookShelfPage;
