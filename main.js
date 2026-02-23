import { fetchBooks } from "./fetchBooks.js";

const booksGrid = document.getElementById("booksGrid");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
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

    const cover = book.formats["image/jpeg"];

    const download = book.formats["application/pdf"] 
      || book.formats["application/epub+zip"]
      || "#";

    const card = document.createElement("div");
    card.className = "bg-white rounded-lg shadow p-4";

    card.innerHTML = `
      <img src="${cover}" 
           class="h-40 w-full object-cover rounded mb-4"/>
      <h4 class="font-semibold">${title}</h4>
      <p class="text-gray-600 text-sm">${author}</p>

      <a href="${download}" target="_blank"
         class="block mt-2 bg-green-500 text-white px-4 py-1 rounded text-center hover:bg-green-600">
         Download
      </a>

      <button 
        class="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        onclick="addFavorite('${title}', '${author}')">
        Add to Favorites
      </button>
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


clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  booksGrid.innerHTML = "";
  message.textContent = "Search cleared.";
});


window.addEventListener("DOMContentLoaded", async () => {

  message.textContent = "Loading free books...";

  const books = await fetchBooks("history");

  displayBooks(books);

});