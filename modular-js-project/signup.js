// signup.js
import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";

// put navbar + footer
document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

const form = document.getElementById("signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // 1️⃣ Create JS object
  const user = { name, email, password };

  // 2️⃣ Convert JS object → JSON string
  const userJSON = JSON.stringify(user); // {"name":"...","email":"...","password":"..."}

  // 3️⃣ Store JSON string in localStorage
  localStorage.setItem("user", userJSON);

  alert("Signup successful!");
  window.location.href = "login.html";
});
