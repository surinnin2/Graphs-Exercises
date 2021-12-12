class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }
  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let n of vertexArray) {
      this.nodes.add(n)
    }
  }
  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2)
    v2.adjacent.add(v1)
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for (let n of this.nodes) {
      n.adjacent.delete(vertex)
    }
    this.nodes.delete(vertex)
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let res = []
    let toVisitStack = [start]
    let visited = new Set([start])
    
    while (toVisitStack.length) {
      let current = toVisitStack.pop()
      res.push(current.value)
      for (let n of current.adjacent) {
        if(!visited.has(n)) {
          toVisitStack.push(n)
          visited.add(n)
        }
      }
    }
    console.log(res)
    return res
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let res = []
    let toVisitQueue = [start]
    let visited = new Set([start])
    
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift()
      res.push(current.value)
      for (let n of current.adjacent) {
        if (!visited.has(n)) {
          toVisitQueue.push(n)
          visited.add(n)
        }
      }
    }
    console.log(res)
    return res
  }
}

module.exports = {Graph, Node}