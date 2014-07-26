var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

//stores values in no particular order
//no repeat values


var setPrototype = {};

setPrototype.add = function(item){
  //add a string to the set
  //does not add duplicates
  this._storage[item] = true;
};

setPrototype.contains = function(item){
  //check if a string is in the set, returns boolean
  return this._storage[item] || false;
};

setPrototype.remove = function(item){
  //move an item from the set
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 all functions are O(n)
 they take the same amount of time, no matter the size of the set
 */
