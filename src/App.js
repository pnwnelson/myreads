// Import Tools
import React from 'react'
import { Link, Route } from 'react-router-dom'
import { throttle } from 'throttle-debounce'
// Import Assets
import * as BooksAPI from './utils/BooksAPI'
import './assets/App.css'
// Import Components
import ListBooks from './listbooks'
import BookSearch from './booksearch'

class BooksApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentlyReading: [],
      wantToRead: [],
      read: [],
      books: [],
      searchResults: [],
      showSearchPage: false
    }
  }

// Get the data from the API first...
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

 // handler to move book to a different shelf
  updateBookShelf = (book,shelf) => {
    BooksAPI.update(book,shelf)
      .then(
        this.setState(state => (
          {books: state.books.map(b => {
            if (b.title === book.title){
              b.shelf = shelf;
              return b
            } else {
              return b
            }
          }),
          showSearchPage: false,
         }))
      )
  };

  // handler to search for a book that is not on a shelf
  searchBooks = throttle(100, (query) => {
    this.setState({ query })

    if (query.trim() !== '') {
      BooksAPI.search(query).then((res) => {
        this.setState((state, props) => ({searchResults: res }))
      }).catch((e) => {
        console.log('error', e)
        })
      }
    })


  render() {

    return (

      <div className="app">
          <Route exact path='/search' render={() => (
            <BookSearch 
              books={this.state.searchResults} 
              onSearchBooks={(query) => {this.searchBooks(query)}}
              updateBookShelf={this.updateBookShelf} 
            />
          )}/>        
          <Route exact path='/' render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>My Reads</h1>
              </div>
              <div className="list-books-content">
                <ListBooks 
                  value={this.state.value} 
                  books={this.state.books} 
                  updateBookShelf={this.updateBookShelf}
                />
              </div>
              <div className="open-search">
                <Link 
                  to='/search' 
                  onClick={() => this.setState({ showSearchPage: true })}
                >
                Add a book
                </Link>
              </div>
            </div>
          )}/>
      </div>
    )
  }
}

export default BooksApp

