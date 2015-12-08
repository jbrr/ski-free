const chai = require('chai');
const assert = chai.assert;

const Skier = require('../app/lib/skier');
// const Skifree = require('../app/lib/skifree');

describe('Skier', function () {

  it('should be an object', function() {
    let skier = new Skier({ maxWidth: 600});
    assert.isObject(skier);
  });

  it('should have an X-coordinate', function() {
    let skier = new Skier({ maxWidth: 600});
    assert.strictEqual(skier.x, 300);
  });

  it('should have a Y-coordinate', function() {
    let skier = new Skier({ maxWidth: 600});
    assert.strictEqual(skier.y, 150);
  });

  it('should have a width', function() {
    let skier = new Skier({ maxWidth: 600});
    assert.strictEqual(skier.width, 10);
  });

  it('should have a height', function() {
    let skier = new Skier({ maxWidth: 600});
    assert.strictEqual(skier.height, 10);
  });

  describe('moveLeft', function() {
    it('should move the skier left', function() {
      let skier = new Skier({ maxWidth: 600});
      let skier2 = skier.moveLeft();
      assert.isTrue(skier2.x < skier.maxWidth/2);
    });
  });

  describe('moveRight', function() {
    it('should move the skier right', function() {
      let skier = new Skier({ maxWidth: 600});
      let skier2 = skier.moveRight();
      assert.isTrue(skier2.x > skier.maxWidth/2);
    });
  });
});
