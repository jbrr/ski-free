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
  if (this.eating < 10) { yetiEating(this, 122, 34, skierImg); }
  else if (this.eating < 20) { yetiEating(this, 156, 31, skierImg); }
  else if (this.eating < 30) { yetiEating(this, 187, 31, skierImg); }
  else if (this.eating < 40) { yetiEating(this, 219, 25, skierImg); }
  else { yetiEating(this, 243, 26, skierImg); }

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
    yetiAction(64, 113, 25, yeti, skierImg);
  } else {
    yetiAction(90, 113, 32, yeti, skierImg);
  }
}

function moveLeft(yeti, skierImg) {
  if (yeti.position < 8) {
    yetiAction(64, 159, 25, yeti, skierImg);
  } else {
    yetiAction(90, 159, 32, yeti, skierImg);
  }
}

function yetiAction(posx, posy, width, yeti, skierImg) {
  yeti.context.drawImage(
  skierImg,
  posx,
  posy,
  width,
  41,
  yeti.x,
  yeti.y,
  yeti.width,
  yeti.height
  );
}

function yetiEating(yeti, posx, width, skierImg) {
  yeti.context.drawImage(
    skierImg,
    posx,
    112,
    width,
    42,
    yeti.x,
    yeti.y,
    yeti.width,
    yeti.height
  );
}

module.exports = Yeti;
