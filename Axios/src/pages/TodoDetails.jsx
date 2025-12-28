import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTodoById } from "../api/todoService";

const TodoDetails = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    getTodoById(id).then((data) => setTodo(data));
  }, [id]);

  if (!todo) return <p>Loading...</p>;

  return (
    <div>
      <h2>Todo Details</h2>
      <p><b>ID:</b> {todo.id}</p>
      <p><b>Title:</b> {todo.title}</p>
      <p><b>Status:</b> {todo.completed ? "Completed" : "Pending"}</p>

      <Link to="/">⬅ Back to Todo List</Link>
    </div>
  );
};

export default TodoDetails;
