var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods) 
  queue.first = 0
  queue.last = 0

  
  return queue;
};



var queueMethods = {};


queueMethods.enqueue = function(value) {
    this[this.last] = value ;
    this.last++ ;
  };

queueMethods.dequeue = function() {
    if(this.size() >= 0){
    var dequeued = this[this.first] ;
    delete this[this.first]
    this.first ++ ;
    return dequeued ;
  }

  }


queueMethods.size = function() {
    if (this.last - this.first > 0)
    {return this.last - this.first}
    return 0
  };


