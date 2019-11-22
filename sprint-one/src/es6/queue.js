class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.first = 0
    this.last = 0
  }

enqueue(value) {
    this[this.last] = value ;
    this.last++ ;
  };

dequeue() {
    if(this.size() >= 0){
    var dequeued = this[this.first] ;
    delete this[this.first]
    this.first ++ ;
    return dequeued ;
  }

  }


size() {
    if (this.last - this.first > 0)
    {return this.last - this.first}
    return 0
  };

}
var queue = new Queue()

