import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import Book from './book'

class BookSearch extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired,
    onSearchBooks: PropTypes.func.isRequired,
    shelf: PropTypes.string.isRequired,
    getBookShelf: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    this.props.onSearchBooks(query)
  }

	render () {

    const { shelf, books, onUpdateBookShelf, getBookShelf } = this.props
    const { query } = this.state

    let showingBooks
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = books.filter(book => match.test(book.title) || match.test(book.authors))
    } else {
      showingBooks = []
    }

		return (

			<div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to={{ pathname: '/', state: { showSearchPage: false}}}>Close</Link>
          <div className="search-books-input-wrapper">
              <input 
                type="text" 
                value={this.state.query} 
                onChange={(event) => this.updateQuery(event.target.value)}
                placeholder="Search by title or author"
              />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map(book => 
            <Book 
              key={book.id} 
              book={book} 
              shelf={shelf}
              onUpdateBookShelf={onUpdateBookShelf} 
              getBookShelf={getBookShelf}
            />
            )}
          </ol>
        </div>
      </div>
		)
	}
}

export default BookSearch