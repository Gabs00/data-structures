
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
    this.children.push(child);
}

treeMethods.contains = function(target){
    //if yes, return true;
    if ( this.value === target ){
         return true; 
    }
    else if ( this.children.length > 0){
        //if it does, iterate over the children array
        for( var i = 0; i < this.children.length; i++) {
            if(this.children[i].contains(target)){
                return true;
            }
        }
          
    }
    return false;  
};

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
