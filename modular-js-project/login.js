// login.js
import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

const form = document.getElementById("login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  // 1️⃣ Get JSON string from localStorage
  const userJSON = localStorage.getItem("user");

  if (!userJSON) {
    alert("No user found. Please signup first.");
    return;
  }

  // 2️⃣ Convert JSON string → JS object
  const savedUser = JSON.parse(userJSON); // {name: "...", email: "...", password: "..."}

  // 3️⃣ Compare login details
  if (email === savedUser.email && password === savedUser.password) {
    alert("Login successful!");

    // Optional: save login status as JSON
    localStorage.setItem("isLoggedIn", JSON.stringify(true));

    // 4️⃣ Redirect to todos page
    window.location.href = "todos.html";
  } else {
    alert("Invalid email or password");
  }
});
