describe('Node', function() {
  var parentNode;
  var siblingNode;
  var numberList = [0,1,2,3,4,5,6,7,8,9,10];

  beforeEach(function() {
    parentNode = new Node(5);
    siblingNode = new Node(5, true);
  });

  it('Should know its own value', function() {
    parentNode = new Node(4);
    siblingNode = new Node(5, true);
    expect(parentNode.value).to.equal(4);
    expect(siblingNode.value).to.equal(5);
  });

  it('Sibling nodes should know each other', function(){
    var AnotherSibling = new Node(8, true);
    siblingNode.addNodes(AnotherSibling);
    expect(AnotherSibling.search(siblingNode)).to.equal(true);
    expect(siblingNode.search(AnotherSibling)).to.equal(true);
  });

  it('Sibling nodes should remove each other when their connection is deleted', function(){
    var AnotherSibling = new Node(8, true);
    siblingNode.addNodes(AnotherSibling);
    AnotherSibling.removeNodes(siblingNode);
    expect(AnotherSibling.search(siblingNode)).to.equal(false);
    expect(siblingNode.search(AnotherSibling)).to.equal(false);
  });

  it('Children nodes should not automatically know parent', function(){
    var aChildNode = new Node(8);
    parentNode.addNodes(aChildNode)
    expect(parentNode.search(aChildNode)).to.equal(true);
    expect(aChildNode.search(parentNode)).to.equal(false);
  });

});