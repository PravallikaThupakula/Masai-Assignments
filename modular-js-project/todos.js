// todos.js
import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";
import { displayTodos } from "./displayTodos.js";

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

// 1️⃣ Check login using JSON
const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
if (!isLoggedIn) {
  alert("Please login first");
  window.location.href = "login.html";
}

// 2️⃣ Fetch todos JSON from API
async function getTodos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=20");
    
    // 3️⃣ Convert HTTP response → JSON → JS array
    const data = await res.json(); // data is JS array of todo objects

    // 4️⃣ Pass JS objects to display module
    displayTodos(data);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

getTodos();
