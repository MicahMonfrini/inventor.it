import React, {Component} from "react";
import { initStore } from "../store";
import { createBook } from "../actions";
import Link from "next/link";
import withRedux from "next-redux-wrapper";

class SubmitPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      date: "",
      publisher: "",
      category: "",
    };
  }

  render() {
    return (
      <div>
        <form
          onSubmit = {event => {
            event.preventDefault();
            this.props.createBook({ ...this.state });
            this.setState({
              title: "",
              author: "",
              date: "",
              publisher: "",
              category: ""
            })
          }}>
          <p>
            Title:
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={ event => {
                  this.setState({
                    title: event.target.value
                  });
                }}
              />
          </p>
          <p>
            Author:
              <input
                type="text"
                name="author"
                value={this.state.author}
                onChange={ event => {
                  this.setState({
                    author: event.target.value
                  });
                }}
              />
          </p>
          <p>
            Date:
              <input
                type="text"
                name="date"
                value={this.state.date}
                onChange={ event => {
                  this.setState({
                    date: event.target.value
                  });
                }}
              />
          </p>
          <p>
            Publisher:
              <input
                type="text"
                name="publisher"
                value={this.state.publisher}
                onChange={ event => {
                  this.setState({
                    publisher: event.target.value
                  });
                }}
              />
          </p>
          <p>
            Category:
              <input
                type="text"
                name="category"
                value={this.state.category}
                onChange={ event => {
                  this.setState({
                    category: event.target.value
                  });
                }}
              />
          </p>
           <input type="submit" />
        </form>
        <Link href="/books">
          <a>Back to books</a>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createBook: book => {
      dispatch(createBook(book));
    }
  };
};

export default withRedux(initStore, null, mapDispatchToProps)(SubmitPage);
