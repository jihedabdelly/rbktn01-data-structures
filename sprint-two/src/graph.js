

// Instantiate a new graph
var Graph = function() {
	this.nodes = [] ;
	this.edges = [] ;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
this.nodes.push(node)
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	return this.nodes.indexOf(node) !== -1
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	this.nodes.splice(this.nodes.indexOf(node),1)
	for(var i = 0; i<this.edges.length; i++){
		if(this.edges[i].includes(node+'')){
			this.edges.splice(i,1)
			i-- ;
		}
	}
	

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	return this.edges.indexOf(fromNode+''+toNode) !== -1

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	if(this.nodes.indexOf(fromNode) !== -1 && this.nodes.indexOf(toNode) !== -1) {
		this.edges.push(fromNode+''+toNode)
		this.edges.push(toNode+''+fromNode)
	}
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	this.edges.splice(this.nodes.indexOf(fromNode+''+toNode), 1) 
	this.edges.splice(this.nodes.indexOf(toNode+''+fromNode), 1) 
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for(var i =0; i<this.nodes.length ; i++){
		 cb(this.nodes[i])
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


