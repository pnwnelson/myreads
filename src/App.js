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
      doneReading: [],
      books: [],
      selectedShelf: '',
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

  // Handler to change shelves
  updateBookShelf = (book, shelf) => {
    this.setState({selectedShelf: shelf})
    if (book.shelf !== shelf) {
      book.shelf = shelf
      BooksAPI.update(book, shelf).then((res) => {
        this.setState((state, props) => ({
          books: state.books.filter(b => b.id !== book.id).concat([book]) 
        }))
      })
    } else return book
  }

  // Handler to search for a book that is not on a shelf
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

  // Handler to show the correct shelf on menu
  getBookShelf = (book) => {
    const existingBook = this.state.books.find(b => b.id === book.id)
    if (existingBook) return existingBook.shelf
      return book.shelf
  }


  render() {

    return (

      <div className="app">
          <Route exact path='/search' render={() => (
            <BookSearch 
              books={this.state.searchResults} 
              shelf={this.state.selectedShelf}
              onSearchBooks={(query) => {this.searchBooks(query)}}
              onUpdateBookShelf={(book, shelf) => {this.updateBookShelf(book, shelf)}} 
              getBookShelf={this.getBookShelf}
            />
          )}/>        
          <Route exact path='/' render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>my<span className='reads'>reads</span></h1>
                <h2>a virtual book shelf</h2>
              </div>
              <div className="list-books-content">
                <ListBooks 
                  books={this.state.books} 
                  selectedShelf={this.state.selectedShelf}
                  getBookShelf={this.getBookShelf}
                  on
                  onUpdateBookShelf={this.updateBookShelf}
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
              <div className='section-boxes'>
                <div className='app-author'>Built by <a href='http://resume.pnwnelson.com'>Kelly Nelson</a> using <a href='https://facebook.github.io/react/'>ReactJS</a>.</div>
              </div>
            </div>
          )}/>
      </div>
    )
  }
}

export default BooksApp

