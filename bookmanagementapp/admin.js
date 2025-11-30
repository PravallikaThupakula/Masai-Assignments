
const DEFAULT_IMAGE = "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg";

const form = document.getElementById('addBookForm');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const categorySelect = document.getElementById('category');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');

const sortAscBtn = document.getElementById('sortAsc');
const sortDescBtn = document.getElementById('sortDesc');
const filterSelect = document.getElementById('filter');
const booksGrid = document.getElementById('booksGrid');
let books = [];
function uid(){
  return Date.now().toString(36) + Math.random().toString(36).slice(2,7);
}
function renderBooks(){
  const filter = filterSelect.value;
  let toRender = books.slice();

  if(filter && filter !== 'All'){
    toRender = toRender.filter(b => b.category === filter);
  }
  booksGrid.innerHTML = '';

  if(toRender.length === 0){
    booksGrid.innerHTML = <p style="color:#666">No books to show. Add some using the form above.</p>;
    return;
  }

  toRender.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.dataset.id = book.id;

    card.innerHTML = `
      <img src="${book.imageUrl}" alt="${escapeHtml(book.title)}">
      <div class="book-meta">
        <div class="title">${escapeHtml(book.title)}</div>
        <div class="author">By ${escapeHtml(book.author)}</div>
        <div class="category" style="color:var(--muted);font-size:0.85rem;margin-top:6px">${escapeHtml(book.category)}</div>
      </div>
      <div class="card-actions">
        <button class="small-btn" data-action="edit">Edit</button>
        <button class="small-btn delete" data-action="delete">Delete</button>
      </div>
    `;
    card.querySelector('[data-action="delete"]').addEventListener('click', () => {
      deleteBook(book.id);
    });
    card.querySelector('[data-action="edit"]').addEventListener('click', () => {
      titleInput.value = book.title;
      authorInput.value = book.author;
      categorySelect.value = book.category;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    booksGrid.appendChild(card);
  });
}
function escapeHtml(str){
  if(!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
form.addEventListener('submit', function(e){
  e.preventDefault(); 

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const category = categorySelect.value;

  if(!title || !author){
    alert('Please enter title and author.');
    return;
  }

  const book = {
    id: uid(),
    title,
    author,
    category,
    imageUrl: DEFAULT_IMAGE
  };

  books.push(book);
  renderBooks();
  form.reset();
  titleInput.focus();
});
clearBtn.addEventListener('click', () => {
  form.reset();
  titleInput.focus();
});
sortAscBtn.addEventListener('click', () => {
  books.sort((a,b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
  renderBooks();
});
sortDescBtn.addEventListener('click', () => {
  books.sort((a,b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
  renderBooks();
});
filterSelect.addEventListener('change', () => {
  renderBooks();
});
function deleteBook(id){
  const idx = books.findIndex(b => b.id === id);
  if(idx === -1) return;
  books.splice(idx, 1);
  renderBooks();
}
renderBooks();