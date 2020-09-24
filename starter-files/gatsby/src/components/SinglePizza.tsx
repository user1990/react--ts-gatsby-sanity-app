import { Link } from 'gatsby';
import React from 'react';

import Img from 'gatsby-image';

export const SinglePizza = ({ pizza: { slug, name, image, toppings } }) => (
  <Link to={`/pizza/${slug?.current}`}>
    <h2>
      <span className="mark">{name}</span>
    </h2>
    <p>{toppings?.map(topping => topping.name).join(', ')}</p>
    <Img fluid={image?.asset?.fluid} alt={name} />
  </Link>
);

export default SinglePizza;
