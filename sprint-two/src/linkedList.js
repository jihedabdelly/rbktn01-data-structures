
var rec = function (target, obj){
 	
 	if(obj.value === target){
 		return true ;
 	}
 	if(obj.next === null){
 		return false ;
 	}
 	else {
 		return rec(target, obj.next)
 	}
 	
 }

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
  	if(list.head === null) {
  		var nod1 = new Node(value);
  		list.head = nod1;
  		list.tail = nod1;
  	} else {
  		var nod2 = new Node(value);
  		list.tail.next = nod2;
  		list.tail = nod2;
  	}

  };

  list.removeHead = function() {
  	var removed = list.head;
  	list.head = list.head.next;
  	return removed.value;
  };

  list.contains = function(target) {
  	  	
  	return rec(target, list.head)
  	
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */