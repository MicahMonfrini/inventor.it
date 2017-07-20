import React, {Component} from "react";
import { initStore } from "../store";
import { getBook } from "../actions";
import withRedux from "next-redux-wrapper";

class BookDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getBook(this.props.url.query.id);
  }

  render() {
    const {title, author, publisher, category} = this.props.book
    return (
      <div>
        <h2>
          {title}
        </h2>
        <ul>
          <li>{author}</li>
          <li>{publisher}</li>
          <li>{category}</li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.book
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getBook: id => {
      dispatch(getBook(id));
    }
  };
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(BookDetail);
