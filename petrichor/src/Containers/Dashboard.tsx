import * as React from 'react';
import gql from 'graphql-tag';
import HeaderNav from '../components/HeaderNav';
import { Mutation } from 'react-apollo';
import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks';
import {
  Banner,
  Card,
  DisplayText,
  Form,
  FormLayout,
  Frame,
  Layout,
  Page,
  PageActions,
  TextField,
  Toast,
} from '@shopify/polaris';
import store from 'store-js';
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
    <Frame>
      <Page>
        <Layout>
          <Form>
            <Card sectioned>
              
            </Card>
          </Form>
        </Layout>
      </Page>
    </Frame>
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


