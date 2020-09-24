import React from 'react';

import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => {
  return <OrderProvider {...props}>{element}</OrderProvider>;
};
