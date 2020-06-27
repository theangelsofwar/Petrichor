
import React, { useState } from 'react';


function Form() {
  //user account name String
  const [account, setAccount] = useState('A');

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

    </div>
  )
}

export default Form;