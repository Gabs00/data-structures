var makeBinarySearchTree = function(value){
  var searchTree = {};
  //A tree
  searchTree = Object.create(makeBinarySearchTree.tree);
  searchTree.value = value;

  //Only has 2 children: left and right
  searchTree.left =null;
  searchTree.right=null;
  return searchTree;
};


makeBinarySearchTree.tree = {};

//a tree where values on the left are less than the current value
//a tree where values on the right are greater than the current value
//unlike tree, it sorts its input
makeBinarySearchTree.tree.insert = function(value){
  if(this.value < value){
    this.right = search(this.right);
  }
  else{
    this.left = search(this.left);
  }

  function search(tree){
    if(tree === null){
      //base case
      return makeBinarySearchTree(value);
    }
    else{
      tree.insert(value);
      return tree;
    }
  }
};

//depth first log method
//explores each branch until it reaches an empty node, then backtracks
//how does it backtrack
//needs to know where to go back to
//always checks left and then right
makeBinarySearchTree.tree.depthFirstLog = function(func){
    //base case: tree.left is defined?
    func(this.value);
    var right = this.right;
    var left = this.left;
    if(left === null){
      //no? how about tree.right?
      if(right === null){
        //no? return
        return false;
      }
      else {
        //yes run this function on tree.right
        this.right.depthFirstLog(func);
      }
    }
    else {
      //yes? run this function on tree.left
      this.left.depthFirstLog(func);
      if(right !== null){
        right.depthFirstLog(func);
      }
    }
};

//Its contain functon picks node to search based on input size and its value
//recursion function that takes a tree, tests if trees values is bigger or smaller. checks if left or right is there
//if the test is true and there is no node there, attaches self on node
makeBinarySearchTree.tree.contains = function(target){
  if(this.value === target){
    return true;
  }
  if(this.value > target){
    if(this.left !== null){
      return search(this.left);
    }
  }
  else{
    if(this.right !== null){
      return search(this.right);
    }
  }
  return false;
  function search(tree){
    return tree.contains(target);
  }
}
//unlike tree, it sorts its input













/*
 * Complexity: What is the time complexity of the above functions?
 depthfirstlog = O(n+1)



*/