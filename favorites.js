const favoritesGrid = document.getElementById("favoritesGrid");

function loadFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favoritesGrid.innerHTML = "";

  if (favorites.length === 0) {
    favoritesGrid.innerHTML = `<p class="text-center text-gray-600 col-span-full">
        No favorite books yet.
      </p>`;
    return;
  }

  favorites.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl shadow-md p-4 flex flex-col";

    card.innerHTML = `
      <h4 class="font-semibold truncate">${book.title}</h4>
      <p class="text-gray-600 text-sm mb-4">${book.author}</p>

      <button 
        class="mt-auto bg-red-500 text-white py-1 rounded hover:bg-red-600"
        onclick="removeFavorite(${index})">
        Remove
      </button>
    `;

    favoritesGrid.appendChild(card);
  });
}

function removeFavorite(index) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.splice(index, 1);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  loadFavorites();
}

window.removeFavorite = removeFavorite;
loadFavorites();