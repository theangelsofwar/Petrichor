import React, { useState } from 'react';



function Account(props) {
  const [name, setName] = useState("AngelsOfWar");
  return (
    <p> Hello, {name} </p>
  )
}

export default Account;