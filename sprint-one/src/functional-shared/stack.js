var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  //instantiate a new object
  var obj = {};
  obj.length = 0;
  
  
  //define an extend function
  var extend = function(target, source){
      for( var key in source){
          target[key] = source[key];
      }
      
      return target;
  }
  
  return extend(obj, stackMethods);
};

var stackMethods = {
    push: function(value){
        //adds an item on top of the stack
        this[this.length] = value;
        
        this.length++;
    },
    
    pop: function(){
        //ensure not empty
        if ( this.length <= 0 ) return undefined;
        
        var item = this[this.length - 1];
        
        delete this[this.length - 1];
        
        this.length--;
        
        return item;
    },
    
    size: function(){
        return this.length;
    }
};


