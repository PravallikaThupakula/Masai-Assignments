function TodoCard({ todo }) {
  return (
    <div className="todo-card">
      <h4>{todo.title}</h4>
      <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}

export default TodoCard;
