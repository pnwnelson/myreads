import React, { Component } from 'react'
import BookShelfChanger from './bookshelfchanger'

class Book extends Component {

	render () {

		const { book, onUpdateBookShelf, shelf, getBookShelf } = this.props

		return (
			<li key={book.id}>
				<div className="book">
	        <div className="book-top">
	          <img className="book-cover" style={{ width: 128, height: 193 }} src={book.imageLinks.smallThumbnail}></img>
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