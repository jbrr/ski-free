var topScores = function(skier, scores) {
  scores.push(Math.floor(skier.distance));
  scores.sort(function(a, b) {
    return b - a;
  });
  scores.splice(5, scores.length - 5);
};

module.exports = topScores;
