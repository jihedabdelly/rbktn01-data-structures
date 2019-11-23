

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || []
  this._storage.set(index, bucket); 
  for(var i = 0 ; i< bucket.length ; i++){

  	var tupple = bucket[i]
  	if(tupple[0] === k) {
  		tupple[1] = v;
  	}
  }

  bucket.push([k,v])

  this._storage.set(index,v)
  console.log('kjk',this._storage)
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(vals,i){
  	console.log(i)
  })

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


