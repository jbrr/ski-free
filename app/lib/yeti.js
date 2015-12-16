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
  posYeti(this);
  var direction = skier.x - this.x;

  drawYeti(this, direction, skierImg);

  this.rotation = Math.atan2(skier.y - this.y, skier.x - this.x);
  this.x += Math.cos(this.rotation);
  this.y += Math.sin(this.rotation);
  return this;
};

Yeti.prototype.eat = function(skier, skierImg) {
  eatingYeti(this);
  if (this.eating < 10) { yetiAction(122, 112, 34, 42, this, skierImg); }
  else if (this.eating < 20) { yetiAction(156, 112, 31, 42, this, skierImg); }
  else if (this.eating < 30) { yetiAction(187, 112, 31, 42, this, skierImg); }
  else if (this.eating < 40) { yetiAction(219, 112, 25, 42, this, skierImg); }
  else { yetiAction(243, 112, 26, 42, this, skierImg); }

  return this;
};

function posYeti(yeti) {
  yeti.position += 1;
  if (yeti.position > 16) {
    return yeti.position = 0;
  }
}

function eatingYeti(yeti) {
  yeti.eating += 1;
  if (yeti.eating > 50) {
    return yeti.eating = 0;
  }
}

function drawYeti(yeti, direction, skierImg) {
  if (direction > 0) {
    moveRight(yeti, skierImg);
  } else {
    moveLeft(yeti, skierImg);
  }
}

function moveRight(yeti, skierImg) {
  if (yeti.position < 8) {
    yetiAction(64, 113, 25, 41, yeti, skierImg);
  } else {
    yetiAction(90, 113, 32, 41, yeti, skierImg);
  }
}

function moveLeft(yeti, skierImg) {
  if (yeti.position < 8) {
    yetiAction(64, 159, 25, 41, yeti, skierImg);
  } else {
    yetiAction(90, 159, 32, 41, yeti, skierImg);
  }
}

function yetiAction(posx, posy, width, height, yeti, skierImg) {
  yeti.context.drawImage(
  skierImg,
  posx,
  posy,
  width,
  height,
  yeti.x,
  yeti.y,
  yeti.width,
  yeti.height
  );
}

module.exports = Yeti;
