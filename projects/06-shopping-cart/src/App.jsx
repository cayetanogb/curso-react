import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products.jsx";
import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { IS_DEVELOMENT } from "./config.js";
import { useFilters } from "./hooks/useFilters.js";
import { Cart } from "./components/Cart.jsx";
import { CartProvider } from "./contexts/cart.jsx";


function App() {
  const [products] = useState(initialProducts);
  const {filterProducts} = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filteredProducts}></Products>
      {IS_DEVELOMENT && <Footer />}
    </CartProvider>
  );
}

export default App;
