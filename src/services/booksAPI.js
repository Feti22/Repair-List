const baseURL = "http://localhost:3004/books";

export const getBooks = async () => {
  const response = await fetch(baseURL);
  const books = await response.json();
  return books;
};

export const searchBooks = async (query) => {
  const response = await fetch(`${baseURL}?q=${query}`);
  const books = await response.json();

  return books;
};

export const updateBookAPI = async (id, shelf) => {
  const response = await fetch(`${baseURL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shelf: shelf }),
  });
  const result = await response.json();

  return result;
};
