## MyReads App

## Description

[Live Demo](https://pnwnelsonmyreads.surge.sh)
- This app is a project built during Udacity's React Nanodegree course. It an app that keeps track of books via 'shelves' for a user.
- The app is a front end that uses Udacity's API back end which provides a book library.

## Components Structure

```
APP.js
|
|
└─ BookSearch.js
|		|
|		└─ Book.js
|
└─ ListBooks.js
		|
		└─ Shelf.js
			|
			└─ Book.js
				|
				└─ BookShelfChanger.js
```

## Required Libraries and Dependencies
All licenses for the following can be found on each library's repo.
- [create-react-app](https://github.com/facebookincubator/create-react-app)
- [react-router-dom](https://github.com/ReactTraining/react-router)
- [throttle-debounce](https://github.com/niksy/throttle-debounce)
- [escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp)
- [prop-types](https://github.com/facebook/prop-types)

## How to run project
1. Clone or download project to it's own project folder
2. Run `npm install --save` from that folder.
3. Run `npm run start`
4. Use the following search terms when searching for a book:

	'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

## Contributing
The files in this repository are used in the Udacity React course videos and are the starting point for all students. Because we want all students to have the same experience going through course, if your pull request alters any of the core files, then it (most likely) will not be merged into the project.