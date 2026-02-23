export function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

export function addFavorite(book) {
  let favorites = getFavorites();

  // prevent duplicate books
  if (!favorites.find(b => b.key === book.key)) {
    favorites.push({
      key: book.key,
      title: book.title,
      author: book.author_name?.[0] || "Unknown Author"
    });

    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}

export function removeFavorite(key) {
  let favorites = getFavorites();
  favorites = favorites.filter(book => book.key !== key);
  localStorage.setItem("favorites", JSON.stringify(favorites));
}