var topScores = function(skier, scores) {
  scores.push(Math.floor(skier.distance));
  scores.sort(function(a, b) {
    return b - a;
  });
};

module.exports = topScores;
