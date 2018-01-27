import React, {Component} from 'react';

class BookCard extends Component {
    shelfChange(book, event) {
        this.props.shelfChange(book, event.target.value);
    }

    bookDefaultShelf(book, books) {
        if (book.shelf) {
            return book.shelf;
        } else {
            const bookFromCollection = books.filter((b) => b.id === book.id);
            if (bookFromCollection.length === 0) {
                return 'none';
            } else {
                return bookFromCollection[0].shelf;
            }
        }
    }

    render() {
        const {books, book} = this.props;

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: 'url("' + book.imageLinks.thumbnail + '")'
                        }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={this.shelfChange.bind(this, book)} value={this.bookDefaultShelf(book, books)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
                </div>
            </li>
        )
    }
}

export default BookCard;