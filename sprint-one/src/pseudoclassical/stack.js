var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  //check if there
  //if there are, var storage
  
  //declare a length property
  this.length = arguments.length;

  //if there are arguments, extend this with the argument properties
  if(arguments.length > 0){
      for( var i = 0; i < arguments.length; i++ ){
          this[i] = arguments[i]
      }
  }
  
  
};
/*
Stack.prototype = {};

Stack.prototype.constructor = new Stack();*/

Stack.prototype.push = function(value){
    //add item to the top
    
    this[this.length] = value;
    
    this.length++;
};

Stack.prototype.pop = function(){
    if(this.length <= 0) return undefined;
    
    this.length--;

    var item = this[this.length];
    
    delete this[this.length];
    
    return item;
};

Stack.prototype.size = function(){
    return this.length;
};