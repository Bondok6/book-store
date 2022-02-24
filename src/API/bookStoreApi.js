// prettier-ignore
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/9G5JlWMTb62xn7FV1JEu/books';

export const addBookToApi = async (newBook) => {
  await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(newBook),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
};

export const removeBookFromApi = async (bookID) => {
  await fetch(`${URL}/${bookID}`, {
    method: 'DELETE',
  });
};

export const getBooksFromApi = async () => {
  const response = await fetch(URL);
  const result = await response.json();
  return result;
};
