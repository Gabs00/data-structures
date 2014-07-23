var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    //add an element to storage, increment size
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    //Check if queue is empty
    if(size <= 0){
      return 0;
    }
    //Get the first element
    var index = 0;
    var item = storage[index];

    //delete it from the queue
    delete storage[index];

    //decrement
    size--;
    //loop through remaining keys, reassing index starting at 0
    var tmp = {};
    for(var i = 0; i < size; i++){
        tmp[i] = storage[i+1];
    }

    storage = tmp;
    return item;
    
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
