import React, { useState } from 'react';

interface IProps {
  nameProp: string;
}

function Account({ nameProp }: IProps) {
  const [name, setName] = useState("Angels Of War");


  
  return (
    <p> Hello, {name} </p>
  )
}

export default Account;