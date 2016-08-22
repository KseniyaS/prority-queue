const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		var node = new Node(data,priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		this.detachRoot();
	}

	detachRoot() {
		this.root = null;
		return this.parentNodes[0];
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {

	}

	isEmpty() {

	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {

		}


	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
