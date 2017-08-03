import React, { Component } from 'react'
import Book from './book'

class Shelf extends Component {

	render () {

		return (
			<div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          	{this.props.books.map(book => <Book key={book.id} book={book} handleShelfChange={this.props.handleShelfChange}/>)}
          </ol>
        </div>
      </div>
		)
	}
}

export default Shelf
