import React, { Component } from 'react'
import BookShelfChanger from './bookshelfchanger'
import PropTypes from 'prop-types'

class Book extends Component {

	static propTypes = {
		book: PropTypes.object.isRequired,
		onUpdateBookShelf: PropTypes.func.isRequired,
		shelf: PropTypes.string.isRequired,
		getBookShelf: PropTypes.func.isRequired
	}

	render () {

		const { book, onUpdateBookShelf, getBookShelf, selectedShelf} = this.props

		return (
			<li key={book.id}>
				<div className="book">
	        <div className="book-top">
	          <img className="book-cover" src={book.imageLinks.smallThumbnail} alt='Cover'></img>
	          <BookShelfChanger 
	          	book={book} 
	          	onUpdateBookShelf={onUpdateBookShelf} 
	          	getBookShelf={getBookShelf}
	          	shelf={selectedShelf}
	          />
	        </div>
	        <div className="book-title">{book.title}</div>
	        <div className="book-authors">{book.authors}</div>
	      </div>
      </li>
		)
	}
}

export default Book