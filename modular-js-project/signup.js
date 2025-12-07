import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";
document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

const form = document.getElementById("signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const user = { name, email, password };
  const userJSON = JSON.stringify(user); 
  localStorage.setItem("user", userJSON);

  alert("Signup successful!");
  window.location.href = "login.html";
});
