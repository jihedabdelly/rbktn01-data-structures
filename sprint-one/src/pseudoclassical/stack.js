var Stack = function() {
  
  
  this.x = 0 ;
  
};





Stack.prototype.push = function(value) {
    this[this.x] = value ;
    this.x++
  }

Stack.prototype.pop = function() {
    delete this[this.x] ;
    if(this.x>0){
      this.x--
    }
    else{
      this.x = 0 ;
    }
    return this[this.x] ;
}


Stack.prototype.size = function() {  
   return this.x ;
  };

var stack = new Stack();



