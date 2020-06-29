import * as React from 'react';
import Tree from 'react-d3-tree';

interface IProps {
  results: string[],
}

const traverse = (obj: any) => {
  if(typeof obj !== 'object') {
    return [{ name: obj }];
  }
  const arr: any[] = [];
  const keys = Object.keys(obj);
  for(let i=0; i < keys.length; i++) {
    const tempObj = {} as any;
    tempObj.children = traverse(obj[keys[i]]);
    arr.push(tempObj);
  }
  return arr;
}


const svgSquare = {
  "shape":"circle",
  "shapeProps": {
    "r": 50
  },
  "Translate X": 443.075,
  "Translate Y": 410.5,
  "Initial Depth": 1,
  "Scale Extent": {
    "Min": 0.1,
    "Max": 1,
  },
  "Node size": {
    "X": 152,
    "Y": 156,
  },
  "Node separation": {
    "Siblings": 1,
    "Non-Siblings": 0
  }
}


const GraphQLVisualizer: React.FC<IProps> = ({ results }) => {
  const data = traverse(JSON.parse(results[0]));

  if(data === undefined) {
    return(
      <div id="visualizer-container">
        <div>
          <h3> Visualizer </h3>
        </div>
        <div id="treeWrapper">
          Alo!
        </div>
      </div>
    )
  } else {
    return (
      <div id="visualizer-container">
        <div>
          <h3> Visualizer </h3>
        </div>
        <div id="treeWrapper">
          <Tree 
            data={data} 
            nodeSvgShape={svgSquare} 
            orientation="vertical"
            zoom={.4}
            separation={{ 
              siblings: 0, 
              nonSiblings: 1
            }}
            nodeSize={{ 
              x: 250,
              y:150
            }}
            circleRadius={28} 
            translate={{ 
              x: 250,
              y: 200
            }}
            textLayout={{
              x: -25,
              y: 0
            }}
            shouldCollapseNeighborNodes={true}
            useCollapseData={true}
            collapsible={true}
            transitionDuration={0}
          />
        </div>
      </div>
    )
  }
}


export default GraphQLVisualizer;