import * as React from 'react';
import gql from 'graphql';
import HeaderNav from '../components/HeaderNav';

//dashboard component is outmost hooks context(hooks only on top level of app)
//colorPreference is the aura of the soul(meditate)

interface IProps {
  name: string;
  username: string;
  colorPreference: string;
}

type OtherProps = {
  name: string;
  aura: string;
}


function Dashboard({ name, username, colorPreference }: IProps): React.ReactNode {
  return (
    <h1> Petrichor </h1>
  )
}


const Banner: React.FC<OtherProps> = ({ name, aura }) => {
  return (
    <div className="banner" id="banner">
      {name}
    </div>
  )
}


export default Dashboard;


