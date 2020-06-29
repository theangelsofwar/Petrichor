import * as React from 'react';
import { Provider } from '@shopify/app-bridge-react';
import Cookies from 'js-cookie';
import '@shopify/polaris/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import ApolloClient from 'apollo-boost';
import { AppProvider } from '@shopify/polaris';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import logo from './logo.svg';
import './App.css';
import HeaderNav from './components/HeaderNav';

import Particles from 'react-particles-js';


import Dashboard from './Containers/Dashboard';
//initiate Apollo Client to a single endpoint
const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include',
  },
});

interface IProps {
  props: any,
}

const App: React.FC = ({ props }: IProps) => {
  //flame count initializes to zero on user
  const [flame, setFlame] = useState(0);
  const config = { 
    apiKey: process.env.SHOPIFY_API_KEY, 
    shopOrigin: Cookies.get("shopOrigin"),
    forceRedirect: true
  }
  const [schemaStatus, updateSchemaStatus] = React.useState<boolean>(false);
  const [queries, updateQueries] = React.useState<Array<object>>([]);
  const [url, updateUrl] = React.useState<string>("");
  const [visualizerStatus, updateVisualizerStatus] = React.useState<boolean>(false);


  React.useEffect((): void =>  {

  })


  const visualizerToggle = (): void => {
    updateVisualizerStatus(!visualizerStatus);
    updateSchemaStatus(false);
  }

  const schemaToggle = (): void => {
    updateSchemaStatus(!schemaStatus);
    updateVisualizerStatus(false);
  }
  return (
    <React.Fragment>
      <Provider>
        <AppProvider>
          <ApolloProvider>
            <Dashboard name='' username='' colorPreference='aliceblue'/>
          </ApolloProvider>
        </AppProvider>
      </Provider>
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      </header>
      {queries.length === 0 ? <Home /> : <HeaderNav schemaToggle={schemaToggle} visualizerToggle={visualizerToggle} />}
      <button onClick={() => setFlame(flame+1)}>
        Set New Flame
      </button>
    </div>
    </React.Fragment>
  );
};

export default App;
