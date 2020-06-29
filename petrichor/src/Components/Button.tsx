import React from 'react';


type IProps = {
  color?: string;
  children: React.ReactNode;

  onClick: () => void;
}


const Button: React.FC<IProps> = ({ children, color = 'aliceblue', onClick }) => {
  return <button style={{ backgroundColor: color }} onClick={onCLick}> {children} </button>
}


export default Button;

