import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [isViewingCart, setIsViewingCart] = useState(false);

  useEffect(() => {
    // Cargar productos desde el archivo JSON
    fetch("./data/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  const addToCart = (productId) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find((item) => item.id === productId);
      if (productInCart) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        const product = products.find((item) => item.id === productId);
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <NavBar totalItems={totalItems} onCartClick={() => setIsViewingCart(!isViewingCart)} />
      <main id="products">
        {isViewingCart ? (
          <Cart cart={cart} removeFromCart={removeFromCart} />
        ) : (
          <ItemListContainer
            products={products}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        )}
      </main>
    </>
  );
}

export default App;
