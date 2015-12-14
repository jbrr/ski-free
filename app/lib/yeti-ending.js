var yetiEnding = function(skier, yeti, skierImg) {
  if (skier.distance > 13000 && Math.random() > 0.9995) {
    yeti.aggressive = true;
  }

  if (yeti.aggressive === true) {
    yeti.attack(skier, skierImg);
  }
};


module.exports = yetiEnding;
