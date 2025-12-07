export function displayTodos(data) {
  const container = document.getElementById("todos-container");
  container.innerHTML = ""; 
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

