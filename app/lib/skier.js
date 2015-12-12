function Skier(options) {
  this.x = options.canvas.width/2;
  this.y = 150;
  this.width = 10;
  this.height = 10;
  this.maxWidth = options.canvas.width;
  this.context = options.context;
  this.lives = 5;
  this.crashed = false;
}

Skier.prototype.moveRight = function() {
  if (this.x < this.maxWidth - this.width) {
    this.x += 5;
  }
  return this;
};

Skier.prototype.moveLeft = function() {
  if (this.x > 3) {
    this.x -= 5;
  }
  return this;
};

Skier.prototype.draw = function(spriteMapImg) {

  var spriteMap = {
    'down': {'x': 0, 'y': 0},
    'left': {'x': 16, 'y': 0},
    'right': {'x': 32, 'y': 0},
    'fullLeft': {'x': 48, 'y': 0},
    'fullRight': {'x': 64, 'y': 0},
    'crashed': {'x': 80, 'y': 0}
  };

  this.context.fillStyle="black";
  this.context.fillRect(this.x, this.y, this.width, this.height);
  return this;

};

module.exports = Skier;
