import { Graph } from "react-d3-graph";
import { Types } from "./types";
import ForceGraph from "force-graph";
import { ForceGraph2D, ForceGraph3D, ForceGraphVR, ForceGraphAR } from 'react-force-graph';

function ForceDirectedGraph() {
    let myData = {
        nodes: [ 
            { 
              "id": "id1",
              "name": "name1",
              "val": 1 
            },
            { 
              "id": "id2",
              "name": "name2",
              "val": 10 
            },
            { 
                "id": "id3",
                "name": "name3",
                "val": 5 
            },
            { 
                "id": "id4",
                "name": "name1",
                "val": 1 
              },
              { 
                "id": "id5",
                "name": "name2",
                "val": 10 
              },
              { 
                  "id": "id6",
                  "name": "name3",
                  "val": 5 
              },
        ],
        links: [
            {
                "source": "id1",
                "target": "id2"
            },
            {
                "source": "id1",
                "target": "id3"
            },
            {
                "source": "id2",
                "target": "id4"
            },
            {
                "source": "id1",
                "target": "id5"
            },
            {
                "source": "id5",
                "target": "id6"
            },
        ]
    }

    return (
        <ForceGraph2D
        graphData={myData}
        linkDirectionalParticles={1.5}
        />
    );
};

export default ForceDirectedGraph;