import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Search from './Search';
import BooksList from './BooksList';

class BooksApp extends React.Component {
  state = {
      books: []
  }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books});
        });
    }

  render() {
    return (
      <div className="app">
        <Route path='/search' exact render={() => (
          <Search />
        )} />
        <Route path='/' exact render={() => (
          <BooksList books={this.state.books} />
        )} />
      </div>
    )
  }
}

export default BooksApp
