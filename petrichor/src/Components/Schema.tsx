import * as React from 'react';
import ReactJson from 'react-json-view';
import introspectionQuery from '../Util/itrospectionQuery';


interface Props {
  url: string,
  queries: object[],
}

const Schema: React.FC<Props> = ({ url, queries }) => {
  const [schema, updateSchema] = React.useState({});


  React.useEffect(() => {
    console.log(queries.length);

    graphQLFetcher(url, introspectionQuery);
  }, [queries.length]);


  function graphQLFetcher(url: string, introspectionQuery: string) {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query: introspectionQuery })
    }).then((res) => {
      res.json();
    }).then((nextResponse) => {
      console.log('the data', nextResponse.data);
      updateSchema(nextResponse.data);
    });
  }


  return(
    <div id="schema-container">
      <div id="schema-data">
        <ReactJson theme="google"
          src={schema}
          name={null}
          iconStyle="triangle"
          indentWidth={1}
          collapsed={false}
          enableClipboard={false}
          displayDataTypes={false}
          displayObjectSize={false} 
        />
      </div>
    </div>
  );
};

export default Schema;