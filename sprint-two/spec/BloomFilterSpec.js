describe('BloomFilter', function() {
  var bloom;
  
  beforeEach(function() {
    bloom = new BloomFilter(18,3);
  });

  it('Should have methods named "add", and "test"', function() {
    expect(bloom.test).to.be.a("function");
    expect(bloom.add).to.be.a("function");
  });

  it('Should test true for known entries', function(){
    bloom.add('a');
    bloom.add('b');
    bloom.add('c');
    expect(bloom.test('a')).to.equal(true);
    expect(bloom.test('b')).to.equal(true);
    expect(bloom.test('c')).to.equal(true);
  });
});
