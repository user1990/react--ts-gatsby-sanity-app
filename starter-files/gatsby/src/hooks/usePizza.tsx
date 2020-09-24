import { useContext } from 'react';

import OrderContext from '../components/OrderContext';

export const usePizza = ({ pizzas, inputs }) => {
  const [order, setOrder] = useContext(OrderContext);

  const addToOrder = orderedPizza => {
    setOrder([...order, orderedPizza]);
  };

  const removeFromOrder = (orderIndex: number) => {
    setOrder([...order.slice(0, orderIndex), ...order.slice(orderIndex + 1)]);
  };

  return { order, addToOrder, removeFromOrder };
};

export default usePizza;
