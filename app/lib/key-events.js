function keyPressed(event, skier) {
  if (event.keyCode === 37) {
    skier.turningLeft = true;
    skier.moveLeft();
  } else if (event.keyCode === 39) {
    skier.turningRight = true;
    skier.moveRight();
  }
}

function keyReleased(event, skier) {
  if (event.keyCode === 37) {
    skier.turningLeft = false;
    skier.moveLeft();
  } else if (event.keyCode === 39) {
    skier.turningRight = false;
    skier.moveRight();
  }
}

module.exports = {keyPressed: keyPressed,
                  keyReleased: keyReleased};
