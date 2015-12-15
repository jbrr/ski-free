const chai = require('chai');
const assert = chai.assert;

const StartFlag = require('../app/lib/start-flag');

describe('StartFlag', function () {
  beforeEach(function () {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 600;
    this.canvas.height = 500;
    this.context = this.canvas.getContext('2d');
    this.image = new Image ();
    this.image.src = 'images/skifree-objects.png';
  });

  it('should be an object', function() {
    var flag = new StartFlag({ canvas: this.canvas, context: this.context });
    assert.isObject(flag);
  });

  it('should have an X-coordinate', function() {
    var flag = new StartFlag({ canvas: this.canvas, context: this.context });
    assert.isDefined(flag.x, 'x coordinate has been defined');
  });

  it('should have a Y-coordinate', function() {
    var flag = new StartFlag({ canvas: this.canvas, context: this.context });
    assert.strictEqual(flag.y, 200);
  });

  it('should have a width', function() {
    var flag = new StartFlag({ canvas: this.canvas, context: this.context });
    assert.ok(flag.width);
  });

  it('should have a height', function() {
    var flag = new StartFlag({ canvas: this.canvas, context: this.context });
    assert.ok(flag.height);
  });

  it('should move up', function() {
    var flag = new StartFlag({ canvas: this.canvas, context: this.context });
    var originalY = flag.y;
    flag.draw(this.image);

    assert.strictEqual(flag.y, originalY - 3);
  });
});
