export async function fetchBooks(query) {
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${query}`
  );
  const data = await response.json();
  return data.docs;
}