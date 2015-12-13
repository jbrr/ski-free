var yetiGenerator = function(skier, yeti) {
  if (skier.distance > 4000 && Math.random() > 0.995) {
    yeti.aggresive = true;
  }

  if (yeti.aggresive === true) {
    yeti.attack(skier);
  }
};


module.exports = yetiGenerator;
