var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  //make an instance of an empty object
  var obj = {};
  obj.length = 0;
  
  //define an extend function
  var extend = function(target, source){
      for( var key in source){
          target[key] = source[key];
      }
      
      return target;
  }
  
  return extend(obj, queueMethods);
};

var queueMethods = {
    
    //define the three methods
    enqueue: function(value){
        //add to obj, using size as the key
        this[this.length] = value;
        
        //increment size
        this.length++;
    },
    
    dequeue: function(){
        //if queue size is 0, return undefined
        if( this.length <= 0) return undefined;
        
        //copy the item at the first index to a temp variable
        var tmp = this[0];
        //var tmpQueue = {};
        
        //shift queue left
        for ( var i = 0; i < this.length; i++ ){
            this[i] = this[i+1];
        }
        //decrement length
        this.length--;

        //delete the last element
        delete this[this.length];

        //return the item
        return tmp;
    },
    
    size: function(){
        return this.length;
    }
};



