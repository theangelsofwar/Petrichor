


function Form() {
  //user account name String
  const [account, setAccount] = useState('A');

  useEffect(function persistForm(){
    localStorage.setItem('formData', account);
  });

  const [accountDetail, setAccountDetail] = useState('Active');

  


  return(
    <div className='form' id='form'>

    </div>
  )
}

export default Form;