function ProductList({ products, onSelect }) {
  console.log("ProductList rendered");

  return (
    <div>
      <h3>Products</h3>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            onClick={() => onSelect(product)}
            style={{ cursor: "pointer" }}
          >
            {product.name} - ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
