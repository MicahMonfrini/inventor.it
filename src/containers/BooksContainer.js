import { connect } from "react-redux";
import { deleteBook } from "../actions";
import Books from "../components/Books";

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteBook: book => {
      dispatch(deleteBook(book));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);
