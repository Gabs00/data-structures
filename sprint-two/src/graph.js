var Graph = function(){
  this._storage = new HashTable();
  this.initial = null;
};

Graph.prototype.addNode = function(newNode, toNode){

  //takes a new node and adds it to the graph
  //create a new node from newNode
  var node = this.new_node(newNode);

  //check if an initial node has been added to the graph
  if(!this.initial){
    this.initial = [true, node];
  }
  else if(this.initial[0]){
    //Attaches new node to the first node
    toNode = this.initial[1];
    this.initial[0] = false;
  }

  this._storage.insert(newNode, node);
  if(toNode){
    this.addEdge(node, toNode);
  }
};

Graph.prototype.contains = function(node){
  var n = this._storage.retrieve(node);

  if(n){
    return true
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  //method that takes any node and removes it from the graph, if present. all edges connect to that node are removed as well
  var node = this.convert(node);
  if(node){
    //for all edges, do remove on edge
    for(var i = 0; i < node.siblings.length; i++){
      this.removeEdge(node, node.siblings[i]);
    }
    this._storage.remove(node.value);
  }

};

Graph.prototype.getEdge = function(fromNode, toNode){
  //method that returns boolean reflecting whether or not two nodes are connected
  var found = false;
  from = this.convert(fromNode);
  to = this.convert(toNode);
  if(from && to){
    var found = from.search(to);
  }
  return found;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var from = this.convert(fromNode);
  var to = this.convert(toNode);
  //method that creates a connection between two nodes
  if(to && from){
    to.addSiblings(from);
  }
};
Graph.prototype.convert = function(node){
  if(node && !node.value){
    node = this._storage.retrieve(node);
  }
  return node;
}
Graph.prototype.removeEdge = function(fromNode, toNode){
  //method that removes connection between two nodes.
  from = this.convert(fromNode);
  to = this.convert(toNode);  
  //To remove an edge
  //Find the edge that points to toNode
  if(to && from){
    //removeSibling returns whether there are any more edges on the node
    from.removeSibling(to);
    this.cleanUp([from,to]);
  }

};
Graph.prototype.cleanUp = function(nodes){
  for(var i = 0; i < nodes.length; i++){
    if(nodes[i].siblings.length <= 0){

      this.removeNode(nodes[i]);
    }
  }
}
Graph.prototype.new_node = function(value){
  var node = Object.create(Graph.node);
  node.value = value;
  node.siblings = [];
  return node;
}

//Node is a type of node it has a value, and children
Graph.node = {};

Graph.node.addSiblings = function(sibling){
  this.siblings.push(sibling);
  if(!sibling.search(this)){
    sibling.addSiblings(this);
  }
}
Graph.node.removeSibling = function(sibling){
  var found = this.search(sibling, function(v, i, c){
                c.splice(i, 1);
              });

  if(found){
    sibling.removeSibling(this);
  }
}

Graph.node.search = function(target, callback){
  var found = false;
  this.siblings.forEach(function(v,i,c){
    if(v.value === target.value){
      found = true;
      if(typeof callback === 'function'){
        callback(v,i,c);
      }
    }
  });
  return found;
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
