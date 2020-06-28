import * as React from "react";
import { GraphqlCodeBlock } from 'graphql-syntax-highlighter-react';


export interface iQuery {
  queries: any[]
}

const Query: React.FC<iQuery> = ({ queries }) => {
  return (
    <div id="query-container">
      
    </div>

  )
}

export default Query;