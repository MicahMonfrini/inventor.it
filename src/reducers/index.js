import {combineReducers} from "redux";
import {BOOKS_LOADED, GET_BOOK_DONE} from "../actions";

function books(state = [], action) {
  switch (action.type) {
    case BOOKS_LOADED:
      return action.value;
    default:
      return state;
  }
}

function book(state = {}, action) {
  switch (action.type) {
    case GET_BOOK_DONE:
      return action.value;
    default:
      return state;
  }
}

export const reducers = combineReducers({
  books,
  book
});
