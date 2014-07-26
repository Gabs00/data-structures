Node.prototype = {};

Node.prototype.addSiblings = function(sibling){
  this.siblings.push(sibling);
  if(!sibling.search(this)){
    sibling.addSiblings(this);
  }
}
Node.prototype.removeSibling = function(sibling){
  var found = false;
  this.search(sibling, function(v, i, c){
    c.splice(i, 1);
    found = true;
  });
  if(found){
    sibling.removeSibling(this);
  }

}
Node.prototype.search = function(target, callback){
  var found = false;
  this.siblings.forEach(function(v,i,c){
    if(v.value === target.value){
      found = true;
      if(typeof callback === 'function'){
        callback(v,i,c);
      }
    }
  });
  return found;
}