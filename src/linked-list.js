const Node = require('./node');

class LinkedList {
    constructor() {
		this.length = 0;
		this._head = null;
		this._tail = null;
		this._nodes = [];
	}

    append(data) {
		const prev = this.length !== 0 && this._nodes[this.length]
		const newNode = new Node(data, prev, null);

		if(this.length !== 0){
			this._nodes[this.length - 1].next = newNode;
		}

		if(this.length === 0){
			this._head = newNode;
		}

		this._tail = newNode;

		this._nodes.push(newNode);

		this.length++;

		return this;
	}

    head() {
		return (this._head !== null) ? this._head.data : null;
	}

    tail() {
		return (this._tail !== null) ? this._tail.data : null;
	}

    at(index) {
		return this._nodes[index].data;
	}

    insertAt(index, data) {
		const newNode = new Node(data, null, null);

		index === 0 && (this._head = newNode);
		index === this.length && (this._tail = newNode);

		this._nodes.splice(index, 0, newNode);

		this.length++;

		return this;
	}

    isEmpty() {
		return this.length === 0;
	}

    clear() {
		this.length = 0;
		this._head = null;
		this._tail = null;
		this._nodes = [];

		return this;
	}

    deleteAt(index) {
		if(index !== 0 && this.length > 1){
			this._nodes[index - 1].next = this._nodes[index + 1];
		}
		if(index !== this.length && this.length > 1){
			this._nodes[index + 1].prev = this._nodes[index - 1];
		}

		this._nodes.splice(index, 1);
		this.length--;

		return this;
	}

    reverse() {
		const headTemp = this._head;

		this._head = this._tail;
		this._tail = headTemp;

		this._nodes.forEach((node) => {
			const prev = {...node.prev};
			node.prev = {...node.next};
			node.next = prev;
		});
		this._nodes.reverse();

		return this;
	}

    indexOf(data) {
		return this._nodes
			.map((data) => data.data)
			.indexOf(data);
	}
}

module.exports = LinkedList;
