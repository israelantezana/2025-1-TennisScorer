function obtenerScore(score1, score2) {
  if (score1 === 1 && score2 === 0) {
    return "15 - 0";
  }
  if (score1 === 2 && score2 === 0) {
    return "30 - 0";
  }
  return "love, love";
}

export default obtenerScore;
