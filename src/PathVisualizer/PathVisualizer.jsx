import React, { Component } from "react";
import Node from "./Node/Node";
import {dijkstra, getNodesInOrder} from '../Algorithms/dijkstra'

import "./PathVisualizer.css";

const START_ROW= 10;
const STAT_COL=15;
const END_ROW= 10;
const END_COL=35;

export default class PathVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
    };
  }

  componentDidMount() {
    const nodes = makeInitialGrid();
    this.setState({nodes});
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
                  <Node
                    key={nodeId}
                    isStart={isStart}
                    isFinish={isFinish}
                    distance={distance}
                    isVisited={isVisited}
                    previousNode={previousNode}
                  ></Node>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

const makeInitialGrid= () => {
  const nodes = [];
  for (let row = 0; row < 20; row++) {
    //creates grid
    const currentRow = [];
    for (let col = 0; col < 50; col++) {
      currentRow.push(createNode(col,row));
    }
    nodes.push(currentRow);
  }
  return nodes;
}

const createNode =(col,row) =>{
  return{
    col,
    row,
    isStart: row === START_ROW && col === STAT_COL,
    isFinish: row === END_ROW && col === END_COL,
    distance: Infinity,
    isVisited: false,
    previousNode: null,
  };
};