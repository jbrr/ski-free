const chai = require('chai');
const assert = chai.assert;

const Rock = require('../app/lib/rock');

describe('Rock', function () {
  beforeEach(function () {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 600;
    this.canvas.height = 500;
    this.context = this.canvas.getContext('2d');
    this.image = new Image ();
    this.image.src = 'images/skifree-objects.png';
  });

  it('should be an object', function() {
    var rock = new Rock({ canvas: this.canvas, context: this.context });
    assert.isObject(rock);
  });

  it('should have an X-coordinate', function() {
    var rock = new Rock({ canvas: this.canvas, context: this.context });
    assert.isDefined(rock.x, 'x coordinate has been defined');
  });

  it('should have a random X-coordinate', function() {
    var rock1 = new Rock({ canvas: this.canvas, context: this.context });
    var rock2 = new Rock({ canvas: this.canvas, context: this.context });
    assert.notStrictEqual(rock1.x, rock2.x);
  });

  it('should have a Y-coordinate', function() {
    var rock = new Rock({ canvas: this.canvas, context: this.context });
    assert.strictEqual(rock.y, 600);
  });

  it('should have a width', function() {
    var rock = new Rock({ canvas: this.canvas, context: this.context });
    assert.ok(rock.width);
  });

  it('should have a height', function() {
    var rock = new Rock({ canvas: this.canvas, context: this.context });
    assert.ok(rock.height);
  });

  it('should be able to go', function() {
    var rock = new Rock({ canvas: this.canvas, context: this.context });
    var originalY = rock.y;
    rock.go(this.image);

    assert.strictEqual(rock.y, originalY - 1);
  });

  it('should be able to stop', function () {
    var rock = new Rock({ canvas: this.canvas, context: this.context });
    var originalY = rock.y;
    rock.stop(this.image);

    assert.strictEqual(rock.y, originalY);
  });
});
