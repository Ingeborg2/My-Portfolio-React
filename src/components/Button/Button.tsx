import { type ReactNode, type MouseEvent } from 'react';

type ButtonProps = {
    children: ReactNode,
    classes: string,
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, classes, onClick} : ButtonProps) => {
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;