/*  
Dijstra's algo is for finding the shortest path between
nodes in a graph (ex. Road networks)





https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
*/

class Graph {
  constructor() {
    this.nodes = [];
    this.adjacencyList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjacencyList[node] = [];
  }

  addEdge(node1, node2, weight) {
    this.adjacencyList[node1].push({ node: node2, weight: weight });
    this.adjacencyList[node2].push({ node: node1, weight: weight });
  }

  findPathWithDijkstra(startNode, endNode) {
    let times = {};
    let backtrace = {};
    let pq = new PriorityQueue();

    times[startNode] = 0;

    this.nodes.forEach((node) => {
      if (node !== startNode) {
        times[node] = Infinity;
      }
    });

    pq.enqueue([startNode, 0]);

    while (!pq.isEmpty()) {
      let shortestStep = pq.dequeue();
      let currentNode = shortestStep[0];

     this.adjacencyList[currentNode].forEach((neighbor) => {
       let time = times[currentNode] + neighbor.weight;
       if (time < times[neighbor.node]) {
         times[neighbor.node] = time;
         backtrace[neighbor.node] = currentNode;
         pq.enqueue([neighbor.node, time]);
       }
     });
    }

    let path = [endNode];
    let lastStep = endNode;
    while (lastStep !== startNode) {
      path.unshift(backtrace[lastStep]);
      lastStep = backtrace[lastStep];
    }
    return `Path is ${path} and time is ${times[endNode]}`;
  }
}

class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  enqueue(element) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 1; i <= this.collection.length; i++) {
        if (element[1] < this.collection[i - 1][1]) {
          this.collection.splice(i - 1, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  }

  dequeue() {
    let value = this.collection.shift();
    return value;
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}

let map = new Graph();
map.addNode("FS");
map.addNode("SB");
map.addNode("IC");
map.addNode("CG");
map.addNode("DI");
map.addNode("DR");
//FS Edges...connections to each node
map.addEdge("FS", "SB", 6);
map.addEdge("FS", "DI", 7);
map.addEdge("FS", "DR", 2);

//SB
map.addEdge("SB", "FS", 6);
map.addEdge("SB", "DR", 3);
map.addEdge("SB", "IC", 6);

//IC
map.addEdge("IC", "SB", 6);
map.addEdge("IC", "DR", 7);
map.addEdge("IC", "CG", 5);

//CG
map.addEdge("CG", "IC", 5);
map.addEdge("CG", "DI", 9);

//DI
map.addEdge("DI", "CG", 9);
map.addEdge("DI", "DR", 4);
map.addEdge("DI", "FS", 7);

//DR...middle node connected to 4 locations(nodes)
map.addEdge("DR", "FS", 2);
map.addEdge("DR", "SB", 3);
map.addEdge("DR", "IC", 7);
map.addEdge("DR", "DI", 4);

console.log(map.findPathWithDijkstra("IC", "DI")); //11

/*

https://medium.com/@adriennetjohnson/a-walkthrough-of-dijkstras-algorithm-in-javascript-e94b74192026



*/
