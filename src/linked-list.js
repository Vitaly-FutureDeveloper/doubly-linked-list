const Node = require('./node');

class LinkedList {
    constructor() {
		this.length = 0;
		this._head = null;
		this._tail = null;
	}

	append(data) {
		if(this.length === 0){
			const newNode = new Node(data, null, null);
			this._head = newNode;
			this._tail = newNode;
		} else {
			let current = this._head;

			//move to the last node
			while(current.next) {
				current = current.next;
			}
			const newNode = new Node(data, current, null);
			current.next = newNode;
			this._tail = newNode;
		}

		this.length++;

		return this
	}

    head() {
		return (this._head !== null) ? this._head.data : null;
	}

    tail() {
		return (this._tail !== null) ? this._tail.data : null;
	}

    at(index) {
		if(index < 0 || this.length <= index){
			return;
		}

		let current = this._head;

		for(let i = 0; i < index; i++){
			current = current.next;
		}

		return current.data;
	}

    insertAt(index, data) {
		if(index < 0 || index > this.length){
			return false;
		}
		const newNode = new Node(data, null, null);

		if(index === 0){
			newNode.next = this._head;
			this._head = newNode;
		} else {
			let current = this._head;
			let prev = null;

			// 1 -> 2 -> 3
			//      p    c
			for(let i = 0; i < index; i++){
				prev = current;
				current = current.next;
			}

			// 1 -> 2 -> 3
			//      p  -> node ->  c

			newNode.prev = prev;
			prev.next = newNode;
			newNode.next = current;
		}

		index === this.length && (this._tail = newNode);

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

		return this;
	}

    deleteAt(index) {
		if(index < 0 || this.length <= index){
			return;
		}

		let current = this._head;

		if(index === 0){
			this._head = current.next;
		} else {
			let prev = null;

			for(let i = 0; i < index; i++){
				prev = current;
				current = current.next;
			}

			prev.next = current.next;
		}

		index === this.length && (this._tail = current);

		this.length--;

		return this;
	}

    reverse() {
		const tempHead = this._head;
		let current = this._head;

		let prev = null;
    	let next = null;

		while(current){
			next = current.next;
            current.next = prev;
            prev = current;
            current = next;
		}

		this._head = this._tail;
		this._tail = tempHead;

		return this;
	}

    indexOf(data) {
		let current = this._head;
		let index = 0;

		while(current){
			if(current.data === data){
				return index;
			}
			current = current.next;
			index++;
		}

		return -1;
	}
}

module.exports = LinkedList;
