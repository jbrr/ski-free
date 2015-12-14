var yetiEnding = function(skier, yeti, skierImg) {
  if (skier.distance > 4000 && Math.random() > 0.995) {
    yeti.aggressive = true;
  }

  if (yeti.aggressive === true) {
    yeti.attack(skier, skierImg);
  }
};


module.exports = yetiEnding;
