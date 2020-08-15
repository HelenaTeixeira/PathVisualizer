import React, { Component } from "react";
import Node from "./Node/Node";

import "./PathVisualizer.css";

export default class PathVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
    };
  }

  componentDidMount() {
    const nodes = [];
    for (let row = 0; row < 20; row++) {
      //creates grid
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        const currentNode = {
          //object node
          row,
          col,
          isStart: row === 10 && col === 5,
          isFinish: row === 10 && col === 45,
          distance: Infinity,
          isVisited: false,
          previousNode: null,
        };
        currentRow.push(currentNode);
      }
      nodes.push(currentRow);
    }
    this.setState({ nodes });
  }

  render() {
    const { nodes } = this.state;
    console.log(nodes);
    return (
      <div className="grid">
        {nodes.map((row, rowId) => {
          //creates nodes inside grid
          return (
            <div key={rowId}>
              {row.map((node, nodeId) => {
                const {
                  isStart,
                  isFinish,
                  distance,
                  isVisited,
                  previousNode,
                } = node;
                return (
                  <Node>
                    key={nodeId}
                    isStart={isStart}
                    isFinish={isFinish}
                    distance={distance}
                    isVisited={isVisited}
                    previousNode={previousNode}
                  </Node>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
