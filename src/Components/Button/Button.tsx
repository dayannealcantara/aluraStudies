import React from 'react';
import './style.scss';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
};
function Button({ onClick, type, children }: ButtonProps) {
  return (
    <button onClick={onClick} type={type} className="botao">
      {children}
    </button>
  );
}
export default Button;
