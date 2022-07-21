const Book = ({ book, updateBook }) => {
  const { id, title, authors, imageLinks, shelf } = book;

  const onShelfChangeHandler = (event) => {
    const shelf = event.target.value;
    updateBook(id, shelf);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: " 128px",
              height: "193px",
              backgroundImage: `url(${imageLinks?.smallThumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={onShelfChangeHandler} value={shelf ?? "none"}>
              <option value="move" disabled="">
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors ? authors.join(", ") : ""}</div>
      </div>
    </li>
  );
};

export default Book;
