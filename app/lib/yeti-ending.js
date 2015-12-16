var yetiEnding = function(skier, yeti, skierImg) {
  if (skier.distance > 1 && Math.random() > 0.1) {
    yeti.aggressive = true;
  }

  if (yeti.aggressive) {
    yeti.attack(skier, skierImg);
  }
};


module.exports = yetiEnding;
