import ky from 'ky';

// prettier-ignore
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/9G5JlWMTb62xn7FV1JEu/books';

export const addBookToApi = async (newBook) => {
  await ky.post(URL, { json: newBook });
};

export const removeBookFromApi = async (bookID) => {
  await ky.delete(`${URL}/${bookID}`);
};

export const getBooksFromApi = async () => {
  const result = await ky.get(URL).json();
  return result;
};
