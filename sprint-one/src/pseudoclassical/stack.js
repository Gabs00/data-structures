var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
};

Stack.prototype.length;
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