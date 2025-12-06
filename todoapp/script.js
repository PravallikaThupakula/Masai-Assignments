const TODO_KEY = "todos";
const API_URL = "https://jsonplaceholder.typicode.com/todos";
window.addEventListener("DOMContentLoaded", init);
function init() {
  const existingTodos = getTodosFromLocalStorage();

  if (existingTodos && existingTodos.length > 0) {
    renderTodos(existingTodos);
  } else {
    fetchTodos();
  }
}
async function fetchTodos() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json(); 

    const first20 = data.slice(0, 20); 

    saveTodosToLocalStorage(first20);
    renderTodos(first20);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}
function saveTodosToLocalStorage(todos) {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function getTodosFromLocalStorage() {
  const data = localStorage.getItem(TODO_KEY);
  return data ? JSON.parse(data) : [];
}
function renderTodos(todos) {
  const container = document.getElementById("todo-container");
  const emptyMessage = document.getElementById("empty-message");
  container.innerHTML = "";

  if (!todos || todos.length === 0) {
    emptyMessage.style.display = "block";
    return;
  } else {
    emptyMessage.style.display = "none";
  }

  todos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo";
    const titleEl = document.createElement("span");
    titleEl.className = "todo-title";
    titleEl.textContent = todo.title;
    const statusEl = document.createElement("span");
    statusEl.className = "todo-status";
    statusEl.textContent = todo.completed ? "Completed ✅" : "Pending ⏳";
    const toggleBtn = document.createElement("button");
    toggleBtn.className = "toggle-btn";
    toggleBtn.textContent = "Toggle Status";
    toggleBtn.addEventListener("click", () => {
      toggleTodo(todo.id);
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      deleteTodo(todo.id);
    });
    todoDiv.appendChild(titleEl);
    todoDiv.appendChild(statusEl);
    todoDiv.appendChild(toggleBtn);
    todoDiv.appendChild(deleteBtn);
    container.appendChild(todoDiv);
  });
}
function deleteTodo(id) {
  let todos = getTodosFromLocalStorage();

  todos = todos.filter((todo) => todo.id !== id);
  saveTodosToLocalStorage(todos);
  renderTodos(todos);
}
function toggleTodo(id) {
  let todos = getTodosFromLocalStorage();

  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });

  saveTodosToLocalStorage(todos);
  renderTodos(todos);
}
