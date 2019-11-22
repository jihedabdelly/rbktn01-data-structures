var Queue = function() {
  var someInstance = {};
  someInstance.last = 0 ;
  someInstance.first = 0 ;
  // Use an object with numeric keys to store values
  var storage = {};

 
  
  someInstance.enqueue = function(value) {
    someInstance[someInstance.last] = value ;
    someInstance.last++ ;
  };

  someInstance.dequeue = function() {
    if(someInstance.size() >= 0){
    var dequeued = someInstance[someInstance.first] ;
    delete someInstance[someInstance.first]
    someInstance.first ++ ;
    return dequeued ;
  }

  }


  someInstance.size = function() {
    if (someInstance.last - someInstance.first > 0)
    {return someInstance.last - someInstance.first}
    return 0
  };

  return someInstance;
};

