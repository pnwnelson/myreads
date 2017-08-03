import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import './assets/App.css'
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
      showSearchPage: false
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  handleShelfChange = (book) => {
    this.setState((state) =>  ({
      books: state.books.filter((b) => b.id !== book.id)
    }))
  }

  render() {

    return (

      <div className="app">
        {this.state.showSearchPage ? (
          <Route exact path='/search' render={() => (
            <BookSearch />
          )}/>        
        ) : (
          <Route exact path='/' render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>My Reads</h1>
              </div>
              <div className="list-books-content">
                <ListBooks books={this.state.books} />
              </div>
              <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
              </div>
            </div>
          )}/>
          
        )}
      </div>
    )
  }
}

export default BooksApp



