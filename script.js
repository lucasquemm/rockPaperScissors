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
let ponto = 0
let cpuponto = 0
function playRound() {
  let cpu = computerPlays()
  let player = playerSelection()

  console.log(cpu)
  if (cpu == player) {
    return 'DRAW'
  } else if (
    (cpu == 'Rock' && player == 'Paper') ||
    (cpu == 'Paper' && player == 'Scissors') ||
    (cpu == 'Scissors' && player == 'Rock')
  ) {
    ponto++
    return 'VITORIA'
  } else {
    cpuponto++
    return 'DERROTA'
  }
}

function game() {
  while (ponto < 3 && cpuponto < 3) {
    console.table({ ponto, cpuponto })
    console.log(playRound())
  }
}

game()
