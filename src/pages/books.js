import React, {Component} from "react";
import { initStore } from "../store";
import { loadBooks } from "../actions";
import withRedux from "next-redux-wrapper";
import BooksContainer from "../containers/BooksContainer";

class BooksPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadBooks();
  }

  render() {
    return (
      <div>
        <BooksContainer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadBooks: () => {
      dispatch(loadBooks());
    }
  };
};

export default withRedux(initStore, null, mapDispatchToProps)(BooksPage);
