import React from 'react';
import pizzas from '../data/pizzas';
import CardPizza from './CardPizza';

const Home = () => {
  return (
    <div>
      {pizzas.map((pizza) => (
        <CardPizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default Home;
