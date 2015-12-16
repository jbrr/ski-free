function keyAction(event, skier, boolean) {
  if (event.keyCode === 37) {
    skier.turningLeft = boolean;
    skier.moveLeft();
  } else if (event.keyCode === 39) {
    skier.turningRight = boolean;
    skier.moveRight();
  }
}

module.exports = keyAction;
