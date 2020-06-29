import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  SettingToggle,
  Stack,
  TextField,
  TextStyle,
} from '@shopify/polaris';

interface IProps {
  discount: string,
  enabled: boolean,
}
const PolarisLayout: React.FC<IProps> = ({ discount, enabled}) => {
  const [disc, setDiscount] = useState('10%');
  const [able, setAble] = useState(false);



  
  function handleSubmit() {
    setDiscount(disc);
  }
  return (
    <Page>
      <Layout>
        <Layout.AnnotatedSection
          title="Default discout"
          description="Add product to discout"
        >
          <Card sectioned>
            <Form onSubmit={this.handleSubmit}>
              <FormLayout>
                <TextField 
                  value={children}
                  onChange={this.handleChange('')}
                  label=""
                  type="discount"
                />
                <Stack distribution="trailing">
                  <Button primary submit>
                    Save
                  </Button>
                </Stack>
              </FormLayout>
            </Form>
          </Card>
        </Layout.AnnotatedSection>

        <Layout.AnnotatedSection
          title="Price updates"
          description="updates"
        >
          <SettingToggle
            action={{
              content: contentStatus,
              onAction: handleToggle,
            }}
            enabled={enabled}
          >
            This setting is {' '}
            <TextStyle variation="strong">{textStatus}</TextStyle>
          </SettingToggle>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  );
};




export default PolarisLayout;