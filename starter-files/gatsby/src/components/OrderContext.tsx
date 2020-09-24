import React, { useState } from 'react';

interface OrderContextProps {
  children: React.ReactNode;
}

const OrderContext = React.createContext({});

export const OrderProvider = ({ children }: OrderContextProps) => {
  const [order, setOrder] = useState([]);

  return <OrderContext.Provider value={[order, setOrder]}>{children}</OrderContext.Provider>;
};

export default OrderContext;
