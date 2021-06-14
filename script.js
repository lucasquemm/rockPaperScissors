function getRandom() {
  return Math.round(Math.random() * (3 - 1) + 1)
}

function computerPlays() {
  let idjogada = getRandom()
  if (idjogada == 1) {
    return 'Rock'
  } else if (idjogada == 2) {
    return 'Paper'
  } else {
    return 'Scissors'
  }
}
