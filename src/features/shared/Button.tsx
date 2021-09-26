import { FC, MouseEventHandler } from 'react';
import { styled } from '../../stitches.config';

interface ButtonProps {
  text: string;
  onClick: MouseEventHandler;
}

const StyledButton = styled('button', {
  minWidth: '8.125rem',
  height: '2.5rem',
  color: 'rgb($white)',
  padding: '0.313rem 0.625rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  outline: 'none',
  borderRadius: '1.25rem',
  border: '0.125rem solid rgb($red)',
  background: 'rgb($red)',
  '&:hover': {
    background: 'rgb($white)',
    color: 'rgb($red)'
  }
});

const Button: FC<ButtonProps> = ({ text, onClick }) => <StyledButton onClick={onClick}>{text}</StyledButton>;

export default Button;
