var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var x = 0 ;
  // Implement the methods below
  someInstance.push = function(value) {
    
    someInstance[x] = value ;
    x++ ;
  };

  someInstance.pop = function() {                //{0:a , 1:b, 3:c, 4:d}
    delete someInstance[x] ;
    if(x>0){
      x-- ;
    }
    else{
      x=0
    }
    return someInstance[x]  
  };

  someInstance.size = function() {
   // for(var key in someInstance){
   //  if( parseInt(key)>=0){
   //    cntr++ ;
   //  }
   // }
   return x ;
  };

  return someInstance;
};
