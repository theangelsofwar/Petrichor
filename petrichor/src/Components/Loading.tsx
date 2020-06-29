import React, { useState, useEffect } from 'react';
import { Div, Icon } from 'atomize';

//quicksand/ falling similar to a sand timer loading feature
interface IProps {
  props: any
}
const Loading: React.FC<IProps> = ({ props }: IProps) => {
  return (
    <Div 
      bg="transparent" 
      d="flex" 
      align="center" 
      justify="center" 
      pos="absolute" 
      top="0" 
      bottom="0" 
      right="0" 
      left="0" 
      style={{ 
        zIndex: -1
      }} 
    >
      <Icon 
        name="Loading3" 
        size="4rem" 
        color="brand500" 
      />
    </Div>
  );
};


export default Loading;