var Graph = function(){
  this._storage = new HashTable();
};

Graph.prototype.addNode = function(newNode, toNode){
  
  //takes a new node and adds it to the graph
  //create a new node from newNode
  var node = this.new_node(newNode);
  if(toNode){
    this._storage.insert(newNode, node);
    this.addEdge(newNode, toNode);
  }
  //get toNode
  //create 2 new edges

  // connect edges tails together, 
  //set edge 1 head on newNode
  //set edge 2 head on toNode
};

Graph.prototype.contains = function(node){
  //takes any node and returns boolean, reflecting whether t can be found on the graph
  //check if node value is same as current node value
  var n = this._storage.retrieve(node);
  if(n){
    return true
  }
  return false;
  //if not, return true
  //if node has no edges, return false.
  //for all edges, 
  //have node at other end check contains
  //if item is found, return true
  //else return false
};

Graph.prototype.removeNode = function(node){
  //method that takes any node and removes it from the graph, if present. all edges connect to that node are removed as well
  //for all edges, do removeNode on edge node
  //remove connection to all nodes
  //remove node

};

Graph.prototype.getEdge = function(fromNode, toNode){
  //mthod that returns boolean reflecting whether or not two nodes are connected
  //check edge of both nodes to see if they go tot he same object
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var from = this._storage.retrieve(fromNode);
  var to = this._storage.retrieve(toNode);
  //method that creates a connection between two nodes
  if(to && from){
    var edge_from = this.new_edge();
    from.addsiblings(edge_new);

    var edge_to = this.new_edge();
    to.addsiblings(edge_to);
    edge_new.addToTail(edge_to);
    edge_to.addToTail(edge_new);
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  //method that removes connection between two nodes.
};
Graph.prototype.new_node = function(value){
  var node = Object.create(Graph.node);
  node.value = value;
  node.siblings = [];
  return node;
}
//Edge is a linked list whos head is one node and tail is another
Graph.prototype.new_edge =function(){
  var edge = makeLinkedList();
  return edge;
}
Graph.edge = {};


//Node is a type of node it has a value, and children
Graph.node = {};


Graph.node.addsiblings = function(edge){
  this.children.push(edge)
  edge.addToTail(this);
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
