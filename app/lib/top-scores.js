var topScores = function(skier, scores) {
  scores.push(Math.floor(skier.distance));
  scores.sort(function(a, b) {
    return b - a;
  });
  scores.slice(0, 5);
};

module.exports = topScores;
