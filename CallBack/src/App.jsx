import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const products = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `Product ${i}`,
  price: i + 1
}));

function App() {
  const [count, setCount] = useState(0);

  /* -------------------------------
     useMemo: Optimize total price
     ------------------------------- */
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]); // recalculates ONLY if products change

  /* ----------------------------------------
     useCallback: Memoize handler function
     ---------------------------------------- */
  const handleProductSelect = useCallback((product) => {
    console.log("Selected:", product.name);
  }, []); // same function reference across renders

  return (
    <div>
      <h2>Total Price: ₹{totalPrice}</h2>

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <ProductList
        products={products}
        onSelect={handleProductSelect}
      />
    </div>
  );
}

export default App;
