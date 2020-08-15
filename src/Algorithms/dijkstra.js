function dijkstra(grid, startNode, endNode) {
  const visitedNodes = [];
  startNode.distance = 0;
  const unvisitedNodes = getGridNodes(grid);
  while (unvisitedNodes.length != 0) {
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
    //Update vizinhos
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
