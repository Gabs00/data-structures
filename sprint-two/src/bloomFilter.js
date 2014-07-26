//uses a set of hash functions to toggle on the state of a bit vector
//toggles based on result of hash functions
//does not toggle off bits, as it causes false positives
//has an add function
//has a test function
function BloomFilter(m,k){
  this.table_amount = k;
  this.vector_size = m;
  this._limit = this.vector_size/this.vector_size;
  this.vector = Object.create(BloomFilter.vector);
  this.hashes = Object.create(BloomFilter.hashes);
  this.vector.init(this.vector_size);
  this.hashes.init(this.table_amount, this.limit);
  
}
BloomFilter.prototype = {};
BloomFilter.prototype.add = function(key){
  var indexes = this.hashes.hashify(key);
  this.vector.visit_bit(indexes, function(v){
    this.vector.storage[v] = 1;
  })
};
BloomFilter.prototype.test = function(key){
  var found = true;
  var indexes = this.hashes.hashify(key);

  this.vector.visit_bit(indexes, function(v){
    found = this.vector.storage[v]&found;
  });
  return found
};
BloomFilter.vector = {};
BloomFilter.vector.init = function(length){
  this.storage = [];
  while(this.storage.length < length){
    this.storage.push(0);
  }
}

BloomFilter.vector.visit_bit = function(indexes, callback){
  indexes.forEach(function(v,i,c){
    callback(v);
  })
}

BloomFilter.hashes = {};
BloomFilter.hashes.init = function(amount, limit){
  this.limits = [];
  for(var i = 1; i <= amount; i++){
    this.limits.push(i*limit);
  }
}
BloomFilter.hashes.hashify = function(key){
  var indexes = [];
  for(var i = 0; i < this.limits; i++){
    indexes.push(getIndexBelowMaxForKey(key, this.limits[i]));
  }
  return indexes;
}
