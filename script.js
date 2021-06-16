let pedra = document.querySelector('#pedra')
let papel = document.querySelector('#papel')
let tesoura = document.querySelector('#tesoura')
let jogadaplayer
let escolha = document.querySelector('#escolha')
let ponto = 0
let cpuPonto = 0
let placar = document.querySelector('#placarPlayer')
let placarCpu = document.querySelector('#placarCpu')

function getRandom() {
  return Math.round(Math.random() * (3 - 1) + 1)
}

function computerPlays() {
  let idJogada = getRandom()
  let cpuJogada
  if (idJogada == 1) {
    cpuJogada = 'Rock'
  } else if (idJogada == 2) {
    cpuJogada = 'Paper'
  } else {
    cpuJogada = 'Scissors'
  }
  return cpuJogada
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
    placar.textContent = ++ponto
    return 'VICTORY'
  } else {
    placarCpu.textContent = ++cpuPonto
    return 'DEFEAT'
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
  console.table({ ponto, cpuPonto })
})
