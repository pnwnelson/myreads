import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {

  static propTypes = {
    getBookShelf: PropTypes.func.isRequired,
    getBookShelf: PropTypes.func.isRequired
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

/*
<div className="book-shelf-changer">
                            <select defaultValue={book.shelf} onChange={(e) => this.props.onMoveBook(book, e.target.value)}>
                                <option disabled>Move to...</option>
                                <option className={book.shelf === SHELF_CURRENTLY_READING ? 'highlight-shelf' : null} value={SHELF_CURRENTLY_READING}>Currently Reading</option>
                                <option className={book.shelf === SHELF_WANT_TO_READ ? 'highlight-shelf' : null} value={SHELF_WANT_TO_READ}>Want to Read</option>
                                <option className={book.shelf === SHELF_READ ? 'highlight-shelf' : null} value={SHELF_READ}>Read</option>
                                <option className={book.shelf === SHELF_NONE ? 'highlight-shelf' : null} value={SHELF_NONE}>None</option> */