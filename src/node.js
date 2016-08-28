class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;

		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left === null) {
			this.left = node;
		}
		else if(this.right === null) {
			this.right = node;
		}
		node.parent = this;
	}

	removeChild(node) {
		if (this.left != node && this.right != node){
			throw error;
		}
		else if (this.left == node) {
			this.left = null;

		}
		else if (this.right == node) {
			this.right =null;
		}
		node.parent = null;
	}

	remove() {
		if (this.parent != null) {
			this.parent.removeChild(this);
		}

	}

	swapWithParent() {
		var parent = null;
		var parentOfParent = null;

	}
}

module.exports = Node;
