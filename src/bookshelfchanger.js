import React, { Component } from 'react'

class BookShelfChanger extends Component {

  render () {

    const { book } = this.props

  	return (
  		<div className="book-shelf-changer">
        <select defaultValue={book.shelf} onChange={ (e) => {this.props.updateBookShelf(book, e.target.value) }}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
  	)
  }
}


export default BookShelfChanger
