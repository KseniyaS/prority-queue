const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.count = 0;
	}

	push(data, priority) {
		var node = new Node(data,priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		var root;
		root = this.detachRoot();
		this.restoreRootFromLastInsertedNode(root);
		this.shiftNodeDown(this.root);
		this.count = this.count -1;
	}

	detachRoot() {
		this.root = null;
		return this.parentNodes[0];
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.count;
	}

	isEmpty() {
		return this.root === null;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		this.count = this.count+1;
		if (this.isEmpty()) {
			this.root = node;
		}

		}


	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
