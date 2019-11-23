// var search = function(target,obj){
// 	// debugger ;
	
// 	if(Array.isArray(obj.children) !== true ){
// 		return false ;
// 	}
// 	else 
// 		if(obj.value === target){
// 		return true;
// 	}
// 	obj.children.forEach(function(child){
// 		console.log('inside recursion', this)
// 			return search(target,this)
// 		});
// 	}
	

var arr = [] ;

var Tree = function(value) {
 
  var newTree = {};
  
  newTree.value = value;
  extend(newTree ,treeMethods)
  // your code here
  newTree.children = [];  // fix me
  
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	
	this.children.push(Tree(value))
};

treeMethods.contains = function(target) {
	
  if(this.value === target){
    
    return true
  }

  for(var i = 0; i < this.children.length; i++) {
    console.log('iterated',this.children[i])
    console.log(this.children[i].value,target)
    if(this.children[i].contains(target)) {
      
      return true
      
    }
    
  }
 return false 

};

console.log(arr);

/*
 * Complexity: What is the time complexity of the above functions?
 */
