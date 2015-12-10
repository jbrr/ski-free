const chai = require('chai');
const assert = chai.assert;

const Rock = require('../app/lib/rock');

describe('Rock', function () {
  beforeEach(function () {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 600;
    this.canvas.height = 500;
    this.context = this.canvas.getContext('2d');
  });

  it('should be an object', function() {
    let rock = new Rock({ canvas: this.canvas, context: this.context});
    assert.isObject(rock);
  });

  it('should have an X-coordinate', function() {
    let rock = new Rock({ canvas: this.canvas, context: this.context});
    assert.isDefined(rock.x, 'x coordinate has been defined');
  });

  it('should have a random X-coordinate', function() {
    let rock1 = new Rock({ canvas: this.canvas, context: this.context });
    let rock2 = new Rock({ canvas: this.canvas, context: this.context });
    assert.notStrictEqual(rock1.x, rock2.x);
  });

  it('should have a Y-coordinate', function() {
    let rock = new Rock({ canvas: this.canvas, context: this.context});
    assert.strictEqual(rock.y, 600);
  });

  it('should have a width', function() {
    let rock = new Rock({ canvas: this.canvas, context: this.context});
    assert.strictEqual(rock.width, 10);
  });

  it('should have a height', function() {
    let rock = new Rock({ canvas: this.canvas, context: this.context});
    assert.strictEqual(rock.height, 10);
  });

});
