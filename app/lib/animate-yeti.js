function posYeti(yeti) {
  yeti.position += 1;
  if (yeti.position > 16) {
    return yeti.position = 0;
  }
}

function eatingYeti(yeti) {
  yeti.eating += 1;
  if (yeti.eating > 50) {
    return yeti.eating = 0;
  }
}

function drawYeti(yeti, direction, skierImg) {
  if (direction > 0) {
    moveRight(yeti, skierImg);
  } else {
    moveLeft(yeti, skierImg);
  }
}

function moveRight(yeti, skierImg) {
  if (yeti.position < 8) {
    yetiAction(64, 113, 25, 41, yeti, skierImg);
  } else {
    yetiAction(90, 113, 32, 41, yeti, skierImg);
  }
}

function moveLeft(yeti, skierImg) {
  if (yeti.position < 8) {
    yetiAction(64, 159, 25, 41, yeti, skierImg);
  } else {
    yetiAction(90, 159, 32, 41, yeti, skierImg);
  }
}

function yetiAction(posx, posy, width, height, yeti, skierImg) {
  yeti.context.drawImage(
  skierImg,
  posx,
  posy,
  width,
  height,
  yeti.x,
  yeti.y,
  yeti.width,
  yeti.height
  );
}

module.exports = { posYeti: posYeti,
                   eatingYeti: eatingYeti,
                   drawYeti: drawYeti,
                   yetiAction: yetiAction };
