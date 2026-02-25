Book Explorer

A responsive web application that allows users to search for free books, read them online, and save their favorite books locally using browser storage.

Book Explorer is a frontend web application built using HTML, Tailwind CSS, and modern JavaScript (ES6 Modules).

The application integrates with the Gutendex API (Project Gutenberg) to fetch free public-domain books dynamically based on user search queries.

This project demonstrates real-world frontend development concepts including:

REST API integration
Asynchronous JavaScript (async/await)
DOM manipulation
Local Storage management
Modular JavaScript structure
Responsive UI design


Purpose of the Project

The goal of this project is to:
Practice API consumption using fetch()
Implement dynamic UI updates
Use Local Storage for persistent data
Apply modular JavaScript architecture
Build a clean and responsive interface using Tailwind CSS

Features

Search Functionality
Search books by title, author, or keyword
Real-time API data fetching

Displays:

Book cover image
Title
Author name

Each book includes a Read button that redirects users to the official Project Gutenberg page.

Favorites System

Add books to favorites
Prevent duplicate entries
Store favorites in Local Storage
Favorites persist after page refresh

Each book includes a Read button that redirects users to the official Project Gutenberg page.

Favorites System

Add books to favorites
Prevent duplicate entries
Store favorites in Local Storage
Favorites persist after page refresh

Project Architecture

The application follows a modular structure:

book-explorer/
│
├── index.html        # Main search page
├── about.html        # Project information
├── favorites.html    # Saved books page
│
├── main.js           # Handles UI rendering & search logic
├── fetchBook.js      # API request logic
├── favorites.js      # Favorites management logic
│
└── README.md


API Integration

The application uses the Gutendex API:

1.

How It Works

User enters a search term
fetchBooks(query) sends request to API
Data is returned as JSON
Results are rendered dynamically in the grid

Local Storage Implementation

Favorites are stored in the browser using:

localStorage.setItem("favorites", JSON.stringify(favorites));

Each favorite book is stored in this format:

{
  title: "Book Title",
  author: "Author Name"
}

This ensures:

Data persistence
Fast client-side storage
No backend required


How to Install and Run
Option 1: Run Locally (Recommended)

git clone https://github.com/Alinembabazi/Phase-One-Capstone-Project

Open the project folder in VS Code

Install Live Server extension
Right-click index.html
Select Open with Live Server

Option 2: Open Directly

You can open index.html directly in your browser,
but using Live Server is recommended for ES6 module support.

How to Use the Application

Open the Home page
Type a book keyword in the search bar
Click Search
Browse results

Click:

Read → to read 
Favorite → to save the book
Open the Favorites page to view saved books
Remove books if needed

UI & Design Decisions

Tailwind CSS utility classes for fast styling
Responsive grid system
Card-based layout for books
Clean typography
Hover transitions for interactivity

Learning Outcomes

Through this project, the following concepts were applied:

Fetch API usage
Async/await handling
Error handling in API calls
DOM manipulation
Event listeners
Local Storage CRUD operations
Responsive design principles

Author

 Uwababyeyi Mbabazi Aline