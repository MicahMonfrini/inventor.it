import React, {Component} from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import Header from "./Header";

class Books extends Component {
  constructor(props) {
    super(props);
  }

  onDeleteRow() {
    console.log("Row deleted");
  }

  render() {
    // // map over books array. will pass to component via props
    // const bookList = this.props.books.map((book, index) => {
    //   return (
    //     <ul key={index}>
    //       <li><strong>Title:</strong> {book.title}</li>
    //       <li><strong>Author:</strong> {book.author}</li>
    //       <li><strong>Category:</strong> {book.category}</li>
    //       {/* @TODO: configure url to generate unique title for detail page */}
    //       <Link href={{
    //         pathname: "bookdetail",
    //         query: {
    //           id: book._id
    //         }
    //       }}>
    //         <a>More info</a>
    //       </Link>
    //       <br />
    //       <button onClick={() => {
    //         this.props.deleteBook(book._id);
    //       }}>Delete</button>
    //     </ul>
    //   );
    // });
    const options = {
      onDeleteRow: this.onDeleteRow
    };
    const selectRowProp = {
      mode: "checkbox"
    };
    return (
      <div>
        <Header />
        <BootstrapTable
          data={this.props.books}
          search={ true } multiColumnSearch={ true }
          deleteRow={ true }
          selectRow={ selectRowProp }
          options={ options }
        >
          <TableHeaderColumn dataField="title" isKey>Title</TableHeaderColumn>
          <TableHeaderColumn dataField="author">Author</TableHeaderColumn>
          <TableHeaderColumn dataField="category">Category</TableHeaderColumn>
        </BootstrapTable>
        <Link href="/submit">
          <a>Add New Book</a>
        </Link>
      </div>
    );
  }
}

Books.propTypes = {
  books: PropTypes.array.isRequired,
};

export default Books;
