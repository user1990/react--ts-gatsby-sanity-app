import Img from 'gatsby-image';
import React from 'react';

import StyledMenuItem from '../styles/MenuItemStyles';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';

interface Order {
  id: string;
  size: string;
}

interface PizzaOrderProps {
  order: Order[];
  pizzas: any[];
  removeFromOrder: (orderIndex: number) => void;
}

export const PizzaOrder = ({ order, pizzas, removeFromOrder }: PizzaOrderProps) => (
  <>
    {order.map((singleOrder, index) => {
      const pizza = pizzas.find(pizza => pizza.id === singleOrder.id);

      return (
        <StyledMenuItem key={`${singleOrder.id}-${index}`}>
          <Img fluid={pizza.image.asset.fluid}></Img>
          <h2>{pizza.name}</h2>
          <p>
            {formatMoney(calculatePizzaPrice(pizza.price, singleOrder.size))}

            <button
              type="button"
              className="remove"
              title={`Remove ${singleOrder.size} ${pizza.name} from Order`}
              onClick={() => removeFromOrder(index)}></button>
          </p>
        </StyledMenuItem>
      );
    })}
  </>
);

export default PizzaOrder;
