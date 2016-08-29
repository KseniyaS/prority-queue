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
		this.count = this.count + 1;
	}

	pop() {
		this.count = this.count - 1;
		if (!this.isEmpty()) {

			var root;
			root = this.detachRoot();
			this.restoreRootFromLastInsertedNode(root);
			this.shiftNodeDown(this.root);
			return root.data;

		}
	}

	detachRoot() {
		var tmp = this.root;
		this.root = null;

		return tmp;
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
		this.count = 0;

	}

	insertNode(node) {
		if (this.isEmpty()) {
			this.root = node;
		}
		else {
		}
		}


	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
