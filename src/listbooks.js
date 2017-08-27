import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from './shelf'

class ListBooks extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired
	}

	render () {

		const { books, selectedShelf, onUpdateBookShelf, getBookShelf } = this.props

		return (

            <div className="list-books">
              <div className="list-books-title">
                <h1>my<span className='reads'>reads</span></h1>
                <h2>a virtual book shelf</h2>
              </div>
            <div className="list-books-content">
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
              </div>
              <div className="open-search">
                <Link 
                  to='/search' 
                  onClick={() => this.setState({ showSearchPage: true })}
                >
                Add a book
                </Link>
              </div>
              <div className='section-boxes'>
                <div className='app-author'>Built by <a href='http://resume.pnwnelson.com'>Kelly Nelson</a> using <a href='https://facebook.github.io/react/'>ReactJS</a>.</div>
              </div>
            </div>
		)
	}
}

export default ListBooks
