import {
  addBookToApi,
  removeBookFromApi,
  getBooksFromApi,
} from '../../API/bookStoreApi';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const getBooks = (payload) => ({
  type: GET_BOOKS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.id);

    case GET_BOOKS:
      return action.payload;

    default:
      return state;
  }
};

export const addNewBook = (newBook) => async (dispatch) => {
  await addBookToApi(newBook);
  dispatch(addBook);
};

export const deleteBook = (bookID) => async (dispatch) => {
  await removeBookFromApi(bookID);
  dispatch(removeBook);
};

export const getAllBooks = () => async (dispatch) => {
  const bookList = await getBooksFromApi();
  const books = [];
  Object.keys(bookList).forEach((id) => {
    books.push({
      item_id: id,
      title: bookList[id][0].title,
      category: bookList[id][0].category,
    });
  });
  dispatch(getBooks(books));
};

export default reducer;
