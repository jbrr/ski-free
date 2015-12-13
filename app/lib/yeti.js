function Yeti(options) {
  this.x = 4;
  this.y = 10;
  this.width = 10;
  this.height = 10;
  this.aggressive = false;
  this.context = options.context;
}

Yeti.prototype.attack = function(skier) {
  this.context.fillStyle="red";
  this.context.fillRect(this.x, this.y, this.width, this.height);
  this.rotation = Math.atan2(skier.y - this.y, skier.x - this.x);
  this.x += Math.cos(this.rotation);
  this.y += Math.sin(this.rotation);
  return this;
};

module.exports = Yeti;
