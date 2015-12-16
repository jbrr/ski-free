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
  posYeti(this);
  var direction = skier.x - this.x;

  drawYeti(this, direction, skierImg);

  this.rotation = Math.atan2(skier.y - this.y, skier.x - this.x);
  this.x += Math.cos(this.rotation);
  this.y += Math.sin(this.rotation);
  return this;
};

function posYeti(yeti) {
  yeti.position += 1;
  if (yeti.position > 16) {
    return yeti.position = 0;
  }
}

function drawYeti(yeti, direction, skierImg) {
  if (yeti.position < 8 && direction > 0) {
    yetiRunning(64, 113, 25, yeti, skierImg);
  } else if (yeti.position > 8 && direction > 0) {
    yetiRunning(90, 113, 32, yeti, skierImg);
  } else if (yeti.position < 8 && direction < 0) {
    yetiRunning(64, 159, 25, yeti, skierImg);
  } else {
    yetiRunning(90, 159, 32, yeti, skierImg);
  }
}

function yetiRunning(posx, posy, width, yeti, skierImg) {
  yeti.context.drawImage(
  skierImg,
  posx,
  posy,
  width,
  41,
  yeti.x,
  yeti.y,
  yeti.height,
  yeti.width
  );
}

module.exports = Yeti;
