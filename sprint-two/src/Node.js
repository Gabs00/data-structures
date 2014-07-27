/*
Node: an abstract data type that generally contains a value and links to other nodes
Functions of a node?
  holds a value
  links to other nodes
  does not need to link to all nodes to reach all nodes
  only knows of its linked nodes
  can connect to other nodes
  can disconnect from other nodes
  can check what nodes it is connected to
  does not have any restrictions on node amount or type, that is implimented on another hgher level

  //expectation of a node
  A node is expected to know what nodes are connected to it
  it is expected to know its value  
*/
function Node(value, twoWay, key){
  if(value === undefined){
    value = null;
  }
  if(key){
    this.key = key;
  }
  else {
    this.key = value;
  }
  this.twoWay = twoWay;
  this.value = value;
  this.nodes = [];
}
Node.prototype = {};
Node.prototype.addValue = function(value){
  if(this.key === this.value){
    this.key = value;
  }
  this.value = value;
}
Node.prototype.addKey = function(key){
  this.key = key;
}
//two way is the difference between parent and sibling
Node.prototype.addNodes = function(node){
  this.nodes.push(node);
  if(this.twoWay === true){
    if(!node.search(this)){
      node.addNodes(this);
    }
  }
}
Node.prototype.removeNodes = function(node){
  var found = this.search(node, function(v, i, c){
                c.splice(i, 1);
              });
  if(this.twoWay === true){
    if(found){
      node.removeNodes(this);
    }
  }

}
Node.prototype.getNodeAt = function(index){
  if(index >= 0 && index < this.nodes.length){
    return this.nodes[index];
  }
}
Node.prototype.nodeCount = function(){
  return this.nodes.length;
}
Node.prototype.traverse = function(callback){
  this.nodes.forEach(function(v,i,c){
    callback(v,i,c);
  })
}
Node.prototype.compare = function(target){
  return this.key === target;
}
//callback is optional
Node.prototype.search = function(target, callback){
  var found = false;
  this.traverse(function(v,i,c){
    if(v.key === target.key){
      found = true;
      if(typeof callback === 'function'){
        callback(v,i,c);
      }
    }
  })
  return found;
}