var Stack = function() {
  var stack = Object.create(stackMethods)
  
  stack.x = 0 ;
  return stack ;
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


