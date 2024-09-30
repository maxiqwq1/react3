import React from 'react';

const CardPizza = ({ pizza }) => {
  return (
    <div>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <img src={pizza.image} alt={pizza.name} />
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Precio: ${pizza.price}</p>
    </div>
  );
};

export default CardPizza;
