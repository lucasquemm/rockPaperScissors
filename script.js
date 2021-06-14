function getRandom() {
  return Math.round(Math.random() * (3 - 1) + 1)
}

function computerPlays() {
  let idjogada = getRandom()
  let cpujogada
  if (idjogada == 1) {
    cpujogada = 'Rock'
  } else if (idjogada == 2) {
    cpujogada = 'Paper'
  } else {
    cpujogada = 'Scissors'
  }
  return cpujogada
}
let capitalize = (str) =>
  str[0].toUpperCase() + str.slice(1, str.length).toLowerCase()

function playerSelection() {
  let jogadaplayer = prompt('ROCK, PAPER OR SCISSORS')
  return capitalize(jogadaplayer)
}

function playRound() {
  let cpu = computerPlays()
  let player = playerSelection()
  console.log(cpu)
  if (cpu == player) {
    return 'DRAW'
  } else if (cpu == 'Rock' && player == 'Paper') {
    return 'VITORIA'
  } else if (cpu == 'Paper' && player == 'Scissors') {
    return 'VITORIA'
  } else if (cpu == 'Scissors' && player == 'Rock') {
    return 'VITORIA'
  } else {
    return 'DERROTA'
  }
}
let i = 0

function game() {
  do {
    i++
    console.log(playRound())
  } while (i < 5)
}
