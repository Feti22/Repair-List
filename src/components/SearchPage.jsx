import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchBooks, updateBookAPI } from "../services/booksAPI";
import Book from "./Book";

const SearchPage = () => {
  const [searchInputValue, setInputValue] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    searchBooks(searchInputValue).then((books) => setBooks(books));
  }, [searchInputValue]);

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const updateBookHandler = (id, shelf) => {
    updateBookAPI(id, shelf)
      .then((response) => searchBooks(searchInputValue))
      .then((books) => setBooks(books));
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            onChange={onChangeHandler}
            type="text"
            placeholder="Search by title or author"
            value={searchInputValue}
          />
        </div>
      </div>
      <div className="search-books-results">
        <div className="results-quantity">
          {/* Your search returned {searchResult  searchResult.length} results. */}
        </div>
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} book={book} updateBook={updateBookHandler} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
