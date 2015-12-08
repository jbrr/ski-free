var canvas = document.getElementById('skifree');
var context = canvas.getContext('2d');
window.addEventListener("keydown", keyPressed, false);

var skier = new Skier({ maxX: canvas.width });

function keyPressed(event) {
  if (event.keyCode == "37") {
    skier.moveLeft();
  } else if (event.keyCode == "39") {
    skier.moveRight();
  }
}

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  skier.draw();
  requestAnimationFrame(gameLoop);
});
