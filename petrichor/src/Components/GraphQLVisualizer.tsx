import * as React from 'react';
import Tree from 'react-d3-tree';

interface IProps {
  results: string[],
}



const traverse = (obj: any) => {

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