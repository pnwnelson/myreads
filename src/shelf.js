import React, { Component } from 'react'
import Book from './book'

class Shelf extends Component {

	render () {

		return (
			<div className="bookshelf section-boxes">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          	{this.props.books.map(book => <Book 
                                            key={book.id} 
                                            book={book} 
                                            updateBookShelf={this.props.updateBookShelf} 
                                            shelf={this.props.shelf}
                                            getBookShelf={this.props.getBookShelf}
                                          />
            )}
          </ol>
        </div>
      </div>
		)
	}
}

export default Shelf
