function hypotenuse(skier, obstacle) {
  return Math.sqrt(Math.pow((skier.x + skier.width / 2) - (obstacle.x + obstacle.width / 2), 2) + Math.pow(skier.y - obstacle.y, 2));
}

module.exports = hypotenuse;
