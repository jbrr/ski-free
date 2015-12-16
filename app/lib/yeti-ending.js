var yetiEnding = function(skier, yeti, skierImg, tickCount) {
  if (skier.distance > 1 && Math.random() > 0.5) {
    yeti.aggressive = true;
  }

  if (yeti.aggressive) {
    yeti.attack(skier, skierImg);
  }
};


module.exports = yetiEnding;
