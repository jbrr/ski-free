function yetiCollision(skier, yeti) {
  return Math.round(yeti.x) === Math.round(skier.x) && Math.round(yeti.y) === Math.round(skier.y);
}

module.exports = yetiCollision;
