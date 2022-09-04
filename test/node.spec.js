// You're lucky, no tests for node, do whatever you want!

const Node = require('../src/node');

describe('#constructor node', () => {
	const nodePrev = new Node(110, null, null);
	const nodeNext = new Node(120, null, null);
	const node = new Node(100, nodePrev, nodeNext);

	it('PrevNode is exist', () => {
		expect(node.prev).to.not.be.null;
		expect(node.prev).to.not.be.undefind;
	});
	it('NextNode is exist', () => {
		expect(node.next).to.not.be.null;
		expect(node.next).to.not.be.undefind;
	});
	it('Node object data', () => {
		expect(node.data).to.equal(100);
	});
	it('Node object prev data', () => {
		expect(node.prev.data).to.equal(110);
	});
	it('Node object next data', () => {
		expect(node.next.data).to.equal(120);
	})
});