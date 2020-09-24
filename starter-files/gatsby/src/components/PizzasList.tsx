import React from 'react';

import SinglePizza from './SinglePizza';

export const PizzaList = ({ pizzas }) => (
  <>
    {pizzas?.map(pizza => (
      <SinglePizza key={pizza.id} pizza={pizza} />
    ))}
  </>
);

export default PizzaList;
