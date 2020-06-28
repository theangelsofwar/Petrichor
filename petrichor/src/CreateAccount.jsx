
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


var totals = 0;

//Create Account to Petrichor/Sign-Up
const CreateAccount = (props) => {
  //user account totals closure/scoping, id 
  const [account, setAccount] = useState(-1);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { verifyjwt } = props;


  let history = useHistory();

  function createUser(e) {
    e.preventDefault();
    if(password === confirmPassword) {
      fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `mutation {createUser(username: "${username}", password: "${password}"){token}}`
        })
      })
      .then((data) => data.json())
      .then((jsonObject) => {
        document.cookie = 'token=' + jsonObject.data.createUser.token;
        verifyjwt();
        history.push('/');
      })
      .catch((err) => console.log(err));
    } else {
      alert('passwords must match');
    }
  }


  function handleUserChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleConfirmPasswordChange(e) {
    setConfirmPassword(e.target.value);
  }


  useEffect(function persistForm(){
    localStorage.setItem('formData', account);
  });

  //status account detail
  const [accountDetail, setAccountDetail] = useState('Active');

  useEffect(function updateStatus() {
    document.title = accountName + '' + accountDetail;
  });


  return(
    <div className='form' id='form'>
      <h2> Petrichor </h2>
      <p> Create an Experience </p>
      <form onSubmit={createUser}>
      <label for="username" translate-context="Label" translate> </label>
      <input 
        type="text"
        id="loginUsername"
        name="username"
        requiredplacehold="Username"
        onChange={handleUserChange}
      />
      <br />
      <label for="password" translate-context="Password"  translate> </label>
      <input 
        type="password"
        id="loginPassword"
        name="password"
        required
        placeholder="Password"
        onChange={handlePasswordChange}
      />
      <label for="confirmPassword" translate-context="Password" translate> </label>
      
      </form>
    </div>
  )
}

export default CreateAccount;