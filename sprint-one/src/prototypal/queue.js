var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //create an instance 

  var storage = Object.create(makeQueue.queueMethods);
  storage.length = 0;
  return storage;
};

makeQueue.queueMethods = {};

makeQueue.queueMethods.enqueue = function(value){
  //Adds an item to the queue
  this[this.length] = value;
  this.length++;
};

makeQueue.queueMethods.dequeue = function(){};

makeQueue.queueMethods.size = function(){
  return this.length;
};

