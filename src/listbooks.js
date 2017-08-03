import React, { Component } from 'react'
import Shelf from './shelf'

class ListBooks extends Component {

	render () {

		return (

      <div>
      	<Shelf name="Currently Reading" books={this.props.books.filter(book => book.shelf === 'currentlyReading' )} />
      	<Shelf name="Want To Read" books={this.props.books.filter(book => book.shelf === 'wantToRead' )} />
      	<Shelf name="Read" books={this.props.books.filter(book => book.shelf === 'read' )} />
      </div>
		)
	}
}

export default ListBooks
