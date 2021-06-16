let pedra = document.querySelector('#pedra')
let papel = document.querySelector('#papel')
let tesoura = document.querySelector('#tesoura')
let jogadaplayer
let escolha = document.querySelector('#escolha')
let ponto = 0
let cpuponto = 0

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

function playRound() {
  let cpu = computerPlays()
  let player = jogadaplayer
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
pedra.addEventListener('click', function () {
  jogadaplayer = 'Rock'
})
papel.addEventListener('click', function () {
  jogadaplayer = 'Paper'
})
tesoura.addEventListener('click', function () {
  jogadaplayer = 'Scissors'
})
escolha.addEventListener('click', function () {
  console.log(playRound())
  console.table({ ponto, cpuponto })
})
