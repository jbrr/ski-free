function Yeti(options) {
  this.x = 4;
  this.y = 10;
  this.width = 43;
  this.height = 32;
  this.aggressive = false;
  this.context = options.context;
}

Yeti.prototype.attack = function(skier, skierImg) {
  this.context.drawImage(
    skierImg,
    0,
    113,
    32,
    41,
    this.x,
    this.y,
    this.height,
    this.width
  );
  this.rotation = Math.atan2(skier.y - this.y, skier.x - this.x);
  this.x += Math.cos(this.rotation);
  this.y += Math.sin(this.rotation);
  return this;
};

module.exports = Yeti;
