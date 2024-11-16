import React from "react";

const ItemListContainer = ({ products, addToCart, removeFromCart }) => {
return (
    <div className="product-container">
    <h2>NUESTROS PRODUCTOS</h2>
    <div className="product-grid">
        {products.map((product) => (
        <div key={product.id} className="product-card">
            <img src={product.imgUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product.id)}>Añadir</button>
            <button onClick={() => removeFromCart(product.id)}>Quitar</button>
        </div>
        ))}
    </div>
    </div>
);
};

export default ItemListContainer;
