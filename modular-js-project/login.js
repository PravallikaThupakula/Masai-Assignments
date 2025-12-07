import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

const form = document.getElementById("login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();
  const userJSON = localStorage.getItem("user");

  if (!userJSON) {
    alert("No user found. Please signup first.");
    return;
  }
  const savedUser = JSON.parse(userJSON);
  if (email === savedUser.email && password === savedUser.password) {
    alert("Login successful!");
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
    window.location.href = "todos.html";
  } else {
    alert("Invalid email or password");
  }
});
