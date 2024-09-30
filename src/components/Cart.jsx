import React, { useState } from 'react';
import pizzas from '../data/pizzas';

const Cart = () => {
  const [cart, setCart] = useState(pizzas.map(pizza => ({ ...pizza, quantity: 1 })));

  const increment = (id) => {
    setCart(cart.map(pizza =>
      pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    ));
  };

  const decrement = (id) => {
    setCart(cart.map(pizza =>
      pizza.id === id && pizza.quantity > 0 ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
    ).filter(pizza => pizza.quantity > 0));
  };

  const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);

  return (
    <div className='papa'>
      {cart.map((pizza) => (
        <div key={pizza.id}>
          <img src={pizza.image} alt={pizza.name} />
          <h2>{pizza.name}</h2>
          <p>Precio: ${pizza.price}</p>
          <p>Cantidad: {pizza.quantity}</p>
          <button onClick={() => increment(pizza.id)}>+</button>
          <button onClick={() => decrement(pizza.id)}>-</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button>Pagar</button>
    </div>
  );
};

export default Cart;
