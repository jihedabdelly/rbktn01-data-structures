class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.x = 0
  }

push(value) {
    this[this.x] = value ;
    this.x++
  }

pop() {
    delete this[this.x] ;
    if(this.x>0){
      this.x--
    }
    else{
      this.x = 0 ;
    }
    return this[this.x] ;
}


size() {  
   return this.x ;
  };



}
var stack = new Stack();
