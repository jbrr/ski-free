var yetiEnding = function(skier, yeti) {
  if (skier.distance > 4000 && Math.random() > 0.995) {
    yeti.aggressive = true;
  }

  if (yeti.aggressive === true) {
    yeti.attack(skier);
  }
};


module.exports = yetiEnding;
