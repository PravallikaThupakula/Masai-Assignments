function TodoCard({ userId, title, completed }) {
  return (
    <div style={{ border: "1px solid gray", margin: "8px", padding: "8px" }}>
      <p>User ID: {userId}</p>
      <p>Title: {title}</p>
      <p>Completed: {completed ? "Yes" : "No"}</p>
    </div>
  );
}

export default TodoCard;
