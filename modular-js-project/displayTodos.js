// displayTodos.js
export function displayTodos(data) {
  // data is an array of JS objects that came from JSON
  const container = document.getElementById("todos-container");
  container.innerHTML = ""; // clear old content

  data.forEach((todo) => {
    const div = document.createElement("div");
    div.className = "todo-item";

    div.innerHTML = `
      <h3>ID: ${todo.id}</h3>
      <p>Title: ${todo.title}</p>
      <p>Completed: ${todo.completed ? "Yes" : "No"}</p>
    `;

    container.appendChild(div);
  });
}

