BookFinder Web App 📚

Overview

BookFinder is a web application built with React.js, Redux Toolkit, and Tailwind CSS that allows users to search for books, view book details, and manage a personal reading list. It fetches book data from the Open Library API and provides a seamless, modern UI with dynamic state management.

Features 🚀

Book Search: Search books by title or author.

Book List: View search results with titles and authors.

Loading & Error States: Handles loading and failed API responses.

Add to List: Save books to a personal reading list.

Responsive Design: Fully responsive layout with a modern UI.

Tech Stack 🛠️

Frontend: React.js, Redux Toolkit, Tailwind CSS

State Management: Redux Toolkit (with slices and async thunks)

API Integration: Axios for HTTP requests

UI/UX: Styled components with Tailwind CSS

Installation 🏗️

Clone the repository:

https://github.com/NidaKhan711/book-finder.git

Navigate to the project folder:

cd bookfinder

Install dependencies:

npm install

Run the app:

npm run dev

Open in browser:

http://localhost:5173

File Structure 📂

├── app/
│   └── store.js
├── components/
│   ├── SearchBar.js
│   ├── BookList.js
│   └── BookForm.js
├── features/
│   └── books/
│       └── bookSlice.js
├── App.js
├── index.js
└── README.md

How It Works ⚙️

SearchBar Component: Takes user input and triggers a book search.

Redux Slice (bookSlice.js): Manages books, loading, and error states.

BookList Component: Renders book cards with titles, authors, and delete functionality.

Async API Calls: Fetches books via createAsyncThunk.

API Reference 🌍

Open Library Search API:

https://openlibrary.org/search.json?q={query}

