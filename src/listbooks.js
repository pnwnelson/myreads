import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Shelf from './shelf'

class ListBooks extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired
	}

	render () {

		const { books, shelf, selectedShelf, onUpdateBookShelf, getBookShelf } = this.props

		return (

      <div>
      	<Shelf 
      		name="Currently Reading" 
      		shelf={selectedShelf}
      		books={books.filter(book => book.shelf === 'currentlyReading' )} 
      		onUpdateBookShelf={onUpdateBookShelf} 
      		getBookShelf={getBookShelf}
      	/>
      	<Shelf 
      		name="Want To Read" 
      		shelf={selectedShelf}
      		books={books.filter(book => book.shelf === 'wantToRead' )} 
      		onUpdateBookShelf={onUpdateBookShelf}
      		getBookShelf={getBookShelf}
      	/>
      	<Shelf 
      		name="Read" 
      		shelf={selectedShelf}
      		books={books.filter(book => book.shelf === 'read' )} 
      		onUpdateBookShelf={onUpdateBookShelf} 
      		getBookShelf={getBookShelf}
      	/>
      </div>
		)
	}
}

export default ListBooks
