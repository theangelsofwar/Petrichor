import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router';
//material ui library


import Dropdown from '../components/DropdownMenu';



export interface IHeaderNav {
  visulizerToggle: () => void,
  schemaToggle: () => void,
  cacheToggle: () => void,
}



//add logo leaf-like

const HeaderNav: React.FC<IHeaderNav>= ({ schemaToggle, cacheToggle, visualizerToggle}) => {
  const [user, setUser] = useState('');
  const [userid, setUserId] = useState(-1);

  const { username } = props;

  function logout() {
    Cookies.remove('token');
  } 

  useEffect(() => {
    const jwt = Cookies.get('token');

    let id;

    if(jwt) {
      fetch('/getuserid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `query {
            allApps(id: ${id}){
              id
              api_key
            }
          }`
        })
      }).then((data) => {
        data.json();
      }).then((mySon) => {
        setUser(mySon.user);
      }).catch((err) => {
        console.log("error fetching user info", err);
      })
    }
  }, []);


  return (
    <React.Fragment>
      <Navbar className="navbar" expand="lg">
      <h1> Petrichor </h1>
      <Link href="/" ></Link>
      <Dropdown />
      <button className="header-item item4" onClick={() => visualizerToggle()} >
        Visualizer
      </button>
      <button className="header-item item2" onClick={() => schemaToggle()}>
        Schema
      </button>

      </Navbar>
    </React.Fragment>
    
  )



};


export default HeaderNav;