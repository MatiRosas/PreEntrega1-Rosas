import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

return (
    <div className="cart-container">
    <h2>Tu Carrito</h2>
    {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
    ) : (
        <div className="cart-items">
        <ul>
            {cart.map((item) => (
            <li key={item.id} >
                <img src={item.imgUrl} alt={item.name} />
                <div>
                <h3>{item.name}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
            </li>
            ))}
        </ul>
        <h4>Total: ${totalPrice}</h4>
        </div>
    )}
    </div>
);
};

export default Cart;
