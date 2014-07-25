

 var makeTree = function(value){
  var newTree = {};

  for(var p in treeMethods){
    newTree[p] = treeMethods[p];
  }

  newTree.value = value;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};
treeMethods.addChild = function(value){

    child = makeTree(value);
    var list = makeLinkedList();

    list.addToTail(child);
    list.value = child.value;

    this.children.push(list);
}

treeMethods.contains = function(target){
  //check if the current tree value = target
  var rootNode = this;
  
  return search(rootNode);
  
  function search(node){
     //if yes, return true;
      if ( node.value === target ){
         return true; 
      }else if ( node.children.length === 0 ){
         //if no, check if the current tree has children 
         //if it doesn't have children, return false
         return false;
      }else{
          //if it does, iterate over the children array
          for ( var i = 0; i < node.children.length; i++) {
              search(node.children[i].head.value);
          }
          
      }

      return false;
  }
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
