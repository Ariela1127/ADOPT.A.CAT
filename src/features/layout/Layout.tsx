import { FC } from 'react';
import { styled } from '../../stitches.config';
import NavBar from './NavBar';

const Container = styled('div', {
  display: 'grid',
  height: '100vh',
  gridTemplateRows: 'auto 1fr auto',
  backgroundColor: 'rgb($black)',
  color: 'white'
});

const Footer = styled('footer', {
  padding: '1rem',
  textAlign: 'center'
});

const Layout: FC = ({ children }) => (
  <Container>
    <NavBar />
    <main>{children}</main>
    <Footer>@Copyright 2021. All rights reserved.</Footer>
  </Container>
);

export default Layout;
