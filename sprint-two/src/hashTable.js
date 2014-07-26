/*HashTable
//has buckets that contain values
//hash function assigns keys to unique bucket
//sometimes, assigns to same bucket
/*/


var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(!bucket){
    var bucket = this.new_bucket();
    bucket.add(k,v);
    this._storage.set( i, bucket);
  }
  else{
      bucket.add(k,v);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  return bucket[k] || null;
};

HashTable.prototype.remove = function(k){
 var i = getIndexBelowMaxForKey(k, this._limit);
 var bucket = this._storage.get(i);
 bucket.remove(k);
};

HashTable.prototype.new_bucket = function(){
  var bucket = Object.create(HashTable.bucket);
  bucket.length = 0;
  return bucket;
}

HashTable.bucket = {};
HashTable.bucket.add = function(k,v){
    this[k] = v;
    this.length++;
}

HashTable.bucket.remove = function(k){
    if(this[k]){
      delete this[k];
      this.length--;
    }
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
