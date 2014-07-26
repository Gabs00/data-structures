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
  var found = null; 
  bucket.search(k, function(value){
    found = value;
  });
  return found;
};

HashTable.prototype.remove = function(k){
 var i = getIndexBelowMaxForKey(k, this._limit);
 var bucket = this._storage.get(i);
 bucket.remove(k);
};

HashTable.prototype.new_bucket = function(){
  var bucket = Object.create(HashTable.bucket);
  bucket._storage = [];
  return bucket;
}

//What if we didn't have the javascript object?
/*

  bucket =[[key, value]]

*/
HashTable.bucket = {};
HashTable.bucket.search = function(k, callback){
  var found = false;
  this._storage.forEach(function(array, index, _storage){
    if(array[0] === k){
      if(callback){
        callback(array[1], index, _storage);
      }
      found = true;
    }
  })
  return found;
}
HashTable.bucket.add = function(k,v){
    var found = this.search(k, function(oldval, i, _storage){
      _storage[i][1] = v;
    });
    if(!found){
      this._storage.push([k,v]);
      this.length++;
    }
}

HashTable.bucket.remove = function(k){
    var found = this.search(k, function(a,i,_storage){
      _storage.splice(i,1);
    });
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
