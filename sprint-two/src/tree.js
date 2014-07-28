//A tree is a grouping of nodes where there are tree nodes and branch nodes
//branch nodes are also tree nodes
//there is a root tree
var makeTree = function(value){
  var tree = new Node(value);
  tree.children = tree.nodes;
  tree.contains = treeMethods.contains;
  tree.addChild = treeMethods.addChild;
  return tree;
};

var treeMethods = {};
treeMethods.addChild = function(value){
  var branch = makeTree(value);
  this.addNodes(branch);
}
treeMethods.contains = function(value){
  var found = false;
  if(this.key === value){
    return true;
  }
  else{
    this.traverse(function(v,i,c){
      if(v.contains(value)){
        found = true;
      }
    })
  }
  return found;
}


//n 
//...
    //1 ...
        //1 ...
        // .....
            //...
    //2..t
    
    //3

    //21 nodes
// array[0 .. 21]

/*
 * Complexity: What is the time complexity of the above functions?
  contain =  O(n)

 */
