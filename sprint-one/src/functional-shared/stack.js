var Stack = function() {
  var stack = {}
  extend(stack, stackMethods)
  stack.x = 0 ;
  return stack ;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


var stackMethods = {};

stackMethods.push = function(value) {
    this[this.x] = value ;
    this.x++
  }

stackMethods.pop = function() {
    delete this[this.x] ;
    if(this.x>0){
      this.x--
    }
    else{
      this.x = 0 ;
    }
    return this[this.x] ;
}


stackMethods.size = function() {  
   return this.x ;
  };

