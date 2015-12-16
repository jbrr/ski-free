var yetiEnding = function(skier, yeti, skierImg) {
  if (skier.distance > 10000 && Math.random() > 0.9995) {
    yeti.aggressive = true;
  }

  if (yeti.aggressive) {
    yeti.attack(skier, skierImg);
  }
};


module.exports = yetiEnding;
