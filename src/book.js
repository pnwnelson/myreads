import React, { Component } from 'react'
import BookShelfChanger from './bookshelfchanger'

class Book extends Component {

	render () {

		const { book, onUpdateBookShelf, getBookShelf } = this.props

		return (
			<li key={book.id}>
				<div className="book">
	        <div className="book-top">
	          <img className="book-cover" src={book.imageLinks.smallThumbnail} alt='Cover'></img>
	          <BookShelfChanger 
	          	book={book} 
	          	onUpdateBookShelf={onUpdateBookShelf} 
	          	getBookShelf={getBookShelf}
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