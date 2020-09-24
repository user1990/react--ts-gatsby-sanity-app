import 'normalize.css';

import React from 'react';
import styled from 'styled-components';

import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer';
import Navigation from './Navigation';
import { ReactComponent as StripesImage } from '../assets/images/stripes.svg';

interface FooterProps {
  children: React.ReactNode;
}

const StyledSiteBorder = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
  background: white url(${StripesImage});
  background-size: 1500px;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  border: 5px solid white;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const StyledContent = styled.div`
  background: white;
  padding: 2rem;
`;

export const Layout = ({ children }: FooterProps) => (
  <>
    <GlobalStyles />
    <Typography />
    <StyledSiteBorder>
      <StyledContent>
        <Navigation />
        {children}
        <Footer />
      </StyledContent>
    </StyledSiteBorder>
  </>
);

export default Layout;
