import { graphql } from 'gatsby';
import React from 'react';

import PizzaList from '../components/PizzasList';
import SEO from '../components/SEO';
import ToppingsFilter from '../components/ToppingsFilter';

export const PizzasPage = ({ data, pageContext }) => {
  const pizzas = data?.pizzas?.nodes;
  return (
    <>
      <SEO title={pageContext.topping ? `Pizzas With ${pageContext.topping}` : `All Pizzas`} />
      <ToppingsFilter activeTopping={pageContext.topping} />
      <PizzaList pizzas={pizzas} />
    </>
  );
};

export default PizzasPage;

export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
