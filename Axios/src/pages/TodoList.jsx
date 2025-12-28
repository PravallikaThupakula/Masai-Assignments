import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <h2>Todo List</h2>

      {todos.map((todo) => (
        <div key={todo.id}>
          <Link to={`/todo/${todo.id}`}>
            <h4>{todo.title}</h4>
          </Link>
          <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
