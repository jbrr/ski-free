const $ = require('jquery');

function displayDivs(div, style) {
  document.getElementById(div).style.display = style;
}

function scoreBoard(skier) {
  $('#score-board').html(
    '<div><p>Lives: ' + skier.lives + '</p><p>Distance: ' + Math.floor(skier.distance) + 'cm</p></div>'
  );
}

module.exports= { displayDivs: displayDivs,
                  scoreBoard: scoreBoard };
