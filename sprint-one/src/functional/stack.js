var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  //Adds an item to the top of the stack
  someInstance.push = function(value){
    //Add element to storage, using length as key
    storage[size] = value;

    //increment length
    size++;
  };

  //returns the item at the top of the stack
  someInstance.pop = function(){
    //test length is not 0
    if(size <= 0){
      return undefined;
    }

    //decrement size
    size--;

    //Get the item at the top
    var item = storage[size];
    delete storage[size];

    return item;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};