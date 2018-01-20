import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BookCard from './BookCard';

class BooksList extends Component {
    render() {
        const {books, shelfChange} = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.filter((b) => b.shelf === 'currentlyReading').map((book) => (
                                        <BookCard key={book.id} book={book} shelfChange={shelfChange} />
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.filter((b) => b.shelf === 'wantToRead').map((book) => (
                                        <BookCard key={book.id} book={book} shelfChange={shelfChange} />
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.filter((b) => b.shelf === 'read').map((book) => (
                                        <BookCard key={book.id} book={book} shelfChange={shelfChange} />
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BooksList;