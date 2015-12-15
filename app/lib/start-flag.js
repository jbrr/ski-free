function StartFlag(options) {
  this.x = options.canvas.width/2;
  this.y = 200;
  this.width = 42;
  this.height = 26;
  this.context = options.context;
}

StartFlag.prototype.draw = function(obstaclesImg) {
  this.context.drawImage(
    obstaclesImg,
    260,
    103,
    42,
    26,
    this.x - 90,
    this.y -= 3,
    42,
    27
  );

  this.context.drawImage(
    obstaclesImg,
    0,
    135,
    42,
    26,
    this.x + 70,
    this.y,
    42,
    27
  );

  return this;
};

module.exports = StartFlag;
