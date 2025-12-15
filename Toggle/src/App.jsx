import { useState } from "react";

function App() {
  const [isRed, setIsRed] = useState(true);

  const handleClick = () => {
    setIsRed(!isRed);
  };

  return (
    <div>
      <div
        style={{
          width: "200px",
          padding: "20px",
          color: "white",
          backgroundColor: isRed ? "red" : "blue",
        }}
      >
        This is a colored div
      </div>

      <button onClick={handleClick}>Toggle Color</button>
    </div>
  );
}

export default App;
