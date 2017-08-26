import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {

  static propTypes = {
    getBookShelf: PropTypes.func.isRequired,
  }

  render () {

    const { book, onUpdateBookShelf, getBookShelf } = this.props

  	return (
  		<div className="book-shelf-changer">
        <select 
          value={getBookShelf(book)} 
          selected
          onChange={event => onUpdateBookShelf(book, event.target.value)}
        >
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