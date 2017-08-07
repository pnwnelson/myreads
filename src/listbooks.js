import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Shelf from './shelf'

class ListBooks extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired
	}

	render () {

		const { books } = this.props

		return (

      <div>
      	<Shelf name="Currently Reading" books={books.filter(book => book.shelf === 'currentlyReading' )} updateBookShelf={this.props.updateBookShelf} />
      	<Shelf name="Want To Read" books={books.filter(book => book.shelf === 'wantToRead' )} updateBookShelf={this.props.updateBookShelf} />
      	<Shelf name="Read" books={books.filter(book => book.shelf === 'read' )} updateBookShelf={this.props.updateBookShelf} />
      </div>
		)
	}
}

export default ListBooks
