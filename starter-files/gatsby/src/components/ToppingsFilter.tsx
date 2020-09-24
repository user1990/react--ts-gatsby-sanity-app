import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

interface ToppingWithCounts {
  id: string;
  name: string;
  count: number;
}

const StyledToppings = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 5px;
    background: var(--grey);
    border-radius: 2px;
    .count {
      background: white;
      padding: 2px 5px;
    }
    &[aria-current='page'] {
      background: var(--yellow);
    }
  }
`;

const countPizzasInToppings = (pizzas): ToppingWithCounts[] => {
  // Return the pizzas with counts
  const counts = pizzas
    .map(pizza => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      // check if this is an existing topping
      const existingTopping = acc[topping.id];
      if (existingTopping) {
        console.log('Existing Topping', existingTopping.name);
        //  if it is, increment by 1
        existingTopping.count += 1;
      } else {
        console.log('New Topping', topping.name);
        // otherwise create a new entry in our acc and set it to one
        acc[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        };
      }
      return acc;
    }, {});
  // sort them based on their count
  const sortedToppings: any[] = Object.values(counts).sort((a: any, b: any) => b.count - a.count);
  return sortedToppings;
};

export const ToppingsFilter = ({ activeTopping }) => {
  // Get a list of all the toppings
  // Get a list of all the Pizzas with their toppings
  const { pizzas } = useStaticQuery(graphql`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
          vegetarian
        }
      }
      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
          }
        }
      }
    }
  `);

  const toppingsWithCounts: ToppingWithCounts[] = countPizzasInToppings(pizzas.nodes);

  return (
    <StyledToppings>
      <Link to="/pizzas">
        <span className="name">All</span>
        <span className="count">{pizzas.nodes.length}</span>
      </Link>
      {toppingsWithCounts.map(topping => (
        <Link
          to={`/topping/${topping.name}`}
          key={topping.id}
          className={topping.name === activeTopping ? 'active' : ''}>
          <span className="name">{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </StyledToppings>
  );
};

export default ToppingsFilter;
