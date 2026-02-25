import { fetchBooks } from "./fetchBooks.js";

const booksGrid = document.getElementById("booksGrid");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const message = document.getElementById("message");

function displayBooks(books) {
  booksGrid.innerHTML = "";

  if (books.length === 0) {
    message.textContent = "No free books found.";
    return;
  }

  message.textContent = "";

  books.forEach(book => {
    const title = book.title;
    const author = book.authors.length > 0
      ? book.authors[0].name
      : "Unknown Author";

    const cover = book.formats["image/jpeg"] || "https://via.placeholder.com/200x300?text=No+Image";
    const readLink = `https://www.gutenberg.org/ebooks/${book.id}`;
    const card = document.createElement("div");
    
    card.className = "bg-white rounded-xl shadow-md hover:shadow-lg transition flex flex-col";
    card.innerHTML = `
      <img src="${cover}" class="h-52 w-full object-cover rounded-t-xl">

      <div class="p-4 flex flex-col flex-grow">

        <h4 class="font-semibold text-gray-800 truncate" title="${title}">
          ${title}
        </h4>

        <p class="text-gray-600 text-sm mb-4 truncate">${author}</p>

        <div class="mt-auto flex gap-2">
          <a href="${readLink}" target="_blank"
             class="flex-1 text-center bg-green-500 text-white py-1 rounded hover:bg-green-600 text-sm">
             Read
          </a>

          <button 
            class="flex-1 bg-blue-500 text-white py-1 rounded hover:bg-blue-600 text-sm"
            onclick="addFavorite('${title.replace(/'/g, "")}', '${author.replace(/'/g, "")}')">
            Favorite
          </button>
        </div>

      </div>
    `;

    booksGrid.appendChild(card);
  });
}

function addFavorite(title, author) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const exists = favorites.find(book => book.title === title);

  if (exists) {
    alert("Already in favorites!");
    return;
  }

  favorites.push({ title, author });
  localStorage.setItem("favorites", JSON.stringify(favorites));
  alert("Added to favorites!");
}

window.addFavorite = addFavorite;

searchBtn.addEventListener("click", async () => {
  const query = searchInput.value.trim();
  if (!query) return;

  message.textContent = "Loading free books...";
  const books = await fetchBooks(query);
  displayBooks(books);
});

window.addEventListener("DOMContentLoaded", async () => {
  message.textContent = "Loading free books...";
  const books = await fetchBooks("history");
  displayBooks(books);
});