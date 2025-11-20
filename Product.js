function processProducts(products) {
  const productNames = products.map((item) => item.name);
  console.log("Extracted Names:", productNames); 

 
  products.forEach((item) => {
    if (item.price > 50) {
      console.log(`${item.name} is above $50`);
    } else {
      console.log(`${item.name} is below $50`);
    }
  });
}


const input = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

processProducts(input);