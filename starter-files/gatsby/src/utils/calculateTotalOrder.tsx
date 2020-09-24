import calculatePizzaPrice from './calculatePizzaPrice';

interface Order {
  id: string;
  size: string;
}

export const calculateOrderTotal = (order: Order[], pizzas: any): number => {
  return order.reduce((runningTotal, singleOrder) => {
    const pizza = pizzas.find(singlePizza => singlePizza.id === singleOrder.id);

    return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);
};

export default calculateOrderTotal;
