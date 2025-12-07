import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";
import { displayTodos } from "./displayTodos.js";

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();
const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
if (!isLoggedIn) {
  alert("Please login first");
  window.location.href = "login.html";
}
async function getTodos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=20");
    const data = await res.json(); 
    displayTodos(data);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

getTodos();
