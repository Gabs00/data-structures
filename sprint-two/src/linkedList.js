//instance of the link list node

var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);

    if(list.head === null){
      list.head = node;
      list.tail = node;
    }

    var tail = list.tail;
    tail.next = node;
    
    list.tail = node;
    //node.next = list.tail;
    //list.tail = node
    
    
  };

  list.removeHead = function(){
      var node = null;
      
      //check if there is a head
      if( list.head !== null ) {
          node = list.head;
          if ( node.next !== null ) {
              list.head = node.next;
          }
      }
      
      return node.value;
      
  };

  list.contains = function(target){
      //start search at the head
      var start = list.head;
      
      while( start !== null ){
          if(start.value === target){
            return true;
          }
          else{
            start = start.next;
          }
      }
      return false;
  };

  return list;
};

//there?
var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
