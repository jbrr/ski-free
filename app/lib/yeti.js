var animateYeti = require('./animate-yeti');

function Yeti(options) {
  this.x = 4;
  this.y = 10;
  this.width = 32;
  this.height = 43;
  this.aggressive = false;
  this.context = options.context;
  this.position = 0;
  this.eating = 0;
}

Yeti.prototype.attack = function(skier, skierImg) {
  animateYeti.posYeti(this);
  var direction = skier.x - this.x;

  animateYeti.drawYeti(this, direction, skierImg);

  this.rotation = Math.atan2(skier.y - this.y, skier.x - this.x);
  this.x += Math.cos(this.rotation);
  this.y += Math.sin(this.rotation);
  return this;
};

Yeti.prototype.eat = function(skier, skierImg) {
  animateYeti.eatingYeti(this);
  if (this.eating < 10) { animateYeti.yetiAction(122, 112, 34, 42, this, skierImg); }
  else if (this.eating < 20) { animateYeti.yetiAction(156, 112, 31, 42, this, skierImg); }
  else if (this.eating < 30) { animateYeti.yetiAction(187, 112, 31, 42, this, skierImg); }
  else if (this.eating < 40) { animateYeti.yetiAction(219, 112, 25, 42, this, skierImg); }
  else { animateYeti.yetiAction(243, 112, 26, 42, this, skierImg); }

  return this;
};

module.exports = Yeti;
