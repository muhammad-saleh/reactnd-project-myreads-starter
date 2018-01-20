import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import {Route} from 'react-router-dom';
import Search from './Search';
import BooksList from './BooksList';

class BooksApp extends React.Component {
    state = {
        books: []
    };

    shelfChange(book, shelf) {
        if (book && shelf) {
            this.setState((state) => {
                let selectedBook = state.books.filter((b) => b.id === book.id)[0];
                selectedBook.shelf = shelf;

                return {books: state.books.filter((b) => b.id !== book.id).concat(selectedBook)}
            });

            BooksAPI.update(book, shelf);
        }
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
                    <Search/>
                )}/>
                <Route path='/' exact render={() => (
                    <BooksList books={this.state.books} shelfChange={this.shelfChange.bind(this)}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
