import React, {Component} from 'react';
import * as _ from 'lodash';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookCard from './BookCard';

class Search extends Component {
    state = {
        query: '',
        books: []
    };

    updateQuery = _.debounce((query) => {
        if (query) {
            this.setState({
                query: query.trim()
            });

            if (this.state.query) {
                BooksAPI.search(this.state.query).then((books) => {
                    if (!books.error) {
                        this.setState({books});
                    } else {
                        this.setState({books: []});
                    }
                });
            }
        }
    }, 250);

    render() {
        const {books, shelfChange} = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               placeholder="Search by title or author"
                               onChange={(event) => this.updateQuery(event.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books && this.state.books.map((book) => (
                            <BookCard key={book.id} books={books} book={book} shelfChange={shelfChange}/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;