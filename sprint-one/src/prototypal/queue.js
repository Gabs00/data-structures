var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //create an instance 

  var storage = Object.create(queueMethods);
  storage.length = 0;
  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  //Adds an item to the queue
  this[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function(){
  //Removes an item from the bottom of queue

  //check if queue is empty
  if(this.length <= 0){
    return undefined;
  }
  var item = this[0];
  this.length--;
  for(var i = 0; i < this.length; i++){
    this[i] = this[i+1];
  }

  delete this[this.length];
  return item;
};

queueMethods.size = function(){
  return this.length;
};

