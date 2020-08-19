function dijkstra(grid, startNode, endNode) {
  const visitedNodes = [];
  startNode.distance = 0;
  const unvisitedNodes = getGridNodes(grid);
  while (unvisitedNodes.length !==0) {
    sortNodesByDistance(unvisitedNodes);
    const neighbor = unvisitedNodes.shift();
    if (neighbor.distance === Infinity) {
      return visitedNodes;
    }
    neighbor.isVisited = true;
    visitedNodes.push(neighbor);
    if (neighbor === endNode) {
      return visitedNodes;
    }
    updateUnvisitedNeighbors(neighbor,grid);
  }
}

function getGridNodes(grid) {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}

function sortNodesByDistance(unvisitedNodes) {
  unvisitedNodes.sort((node1, node2) => node1.distance - node2.distance);
}

function updateUnvisitedNeighbors(node, grid){
  const unvisitedNeighbors= getUnvisitedNeighbors(node,grid);
  for (const neighbor of unvisitedNeighbors){
    neighbor.distance= node.distance-1;
    neighbor.previousNode=node;
  }
}

function getUnvisitedNeighbors(node, grid){
  const neighbors=[];
  const {col, row} = node;
  //gets the left,rigth,top and bottom neighbors
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  //we want only the non-visited
  return neighbors.filter(neighbor => !neighbor.isVisited);
}



export function getNodesInOrder(endNode){
  const nodesinOrder=[];
  let currentNode=endNode;
  while(currentNode!==null){
    nodesinOrder.unshift(currentNode);
    currentNode= currentNode.previousNode;
  }
  return nodesinOrder;
}