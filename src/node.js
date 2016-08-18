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
	}

	remove() {
		if (this.Node) {
			
		}
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
