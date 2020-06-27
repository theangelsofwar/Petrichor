//reuse custom hook to fetch from custom API

/**
 * 
 * @param {*} username 
 */
export default function useUsername(username) {
  //daily sign in rewards a flame
  const [isCheckedIn, setIsCheckedIn] = useState(false);


  useEffect(() => {
    const data = api.fetchData();
    data.then((res) => {
      res.forEach((e) => {

      });
    });
  });

  return isCheckedIn;
};