import { FC } from 'react';
import { Link } from '@reach/router';
import { FaCat as CatIcon } from 'react-icons/fa';
import { styled } from '../../stitches.config';

const Nav = styled('nav', {
  padding: '1.5rem 2rem 3rem 2rem',
  background: 'linear-gradient(rgb($red), rgba($lightRed, 0))',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  gap: '2rem'
});

const StyledLink = styled(Link, {
  textDecoration: 'none',
  textTransform: 'uppercase',
  color: 'rgb($white)',
  fontSize: 'x-large',
  '&:hover': {
    color: 'rgb($gray)'
  }
});

const Message = styled('div', {
  flexGrow: '1',
  textTransform: 'uppercase',
  textAlign: 'center',
  fontSize: 'x-large',
  '& span': {
    fontWeight: 'bold'
  }
});

const NavBar: FC = () => (
  <Nav>
    <StyledLink to='/'>Home</StyledLink>
    <StyledLink to='/faq'>FAQ</StyledLink>
    <Message>
      Welcome to{' '}
      <span>
        ADOPT.A.
        <CatIcon />
      </span>
    </Message>
    <StyledLink to='/cart'>Cart</StyledLink>
  </Nav>
);

export default NavBar;
