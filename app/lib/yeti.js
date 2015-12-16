function Yeti(options) {
  this.x = 4;
  this.y = 10;
  this.width = 43;
  this.height = 32;
  this.aggressive = false;
  this.context = options.context;
  this.position = 0;
}

Yeti.prototype.attack = function(skier, skierImg) {
  this.position += 1;
  if (this.position > 16) {
    return this.position = 0;
  }

  var direction = skier.x - this.x;

  if (this.position < 8 && direction > 0) {
    this.context.drawImage(
      skierImg,
      64,
      113,
      25,
      41,
      this.x,
      this.y,
      this.height,
      this.width
    );
  } else if (this.position > 8 && direction > 0){
    this.context.drawImage(
      skierImg,
      90,
      113,
      32,
      41,
      this.x,
      this.y,
      this.height,
      this.width
    );
  } else if (this.position < 8 && direction < 0){
    this.context.drawImage(
      skierImg,
      64,
      159,
      32,
      41,
      this.x,
      this.y,
      this.height,
      this.width
    );
  } else {
    this.context.drawImage(
      skierImg,
      90,
      159,
      32,
      41,
      this.x,
      this.y,
      this.height,
      this.width
    );
  }
  this.rotation = Math.atan2(skier.y - this.y, skier.x - this.x);
  this.x += Math.cos(this.rotation);
  this.y += Math.sin(this.rotation);
  return this;
};

module.exports = Yeti;
