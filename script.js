let pedra = document.querySelector('#pedra')
let papel = document.querySelector('#papel')
let tesoura = document.querySelector('#tesoura')
let jogadaPlayer
let ponto = 0
let cpuPonto = 0
let placar = document.querySelector('#placarPlayer')
let placarCpu = document.querySelector('#placarCpu')
let resultado = document.querySelector('#placarAtt')

function getRandom() {
  return Math.round(Math.random() * (3 - 1) + 1)
}

function reset() {
  ponto = 0
  cpuPonto = 0
  placar.textContent = 0
  placarCpu.textContent = 0
}

function game() {
  console.log(playRound())
  console.table({ ponto, cpuPonto })
  if (ponto >= 3) {
    resultado.textContent = 'YOU WON'
    reset()
  } else if (cpuPonto >= 3) {
    resultado.textContent = 'CPU WON'
    reset()
  }
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
  let player = jogadaPlayer
  console.log(cpu)

  if (cpu == player) {
    resultado.textContent = 'DRAW'
    return 'DRAW'
  } else if (
    (cpu == 'Rock' && player == 'Paper') ||
    (cpu == 'Paper' && player == 'Scissors') ||
    (cpu == 'Scissors' && player == 'Rock')
  ) {
    placar.textContent = ++ponto
    resultado.textContent = 'YOU WON THE ROUND'
    return 'VICTORY'
  } else {
    placarCpu.textContent = ++cpuPonto
    resultado.textContent = ' CPU WON THE ROUND'
    return 'DEFEAT'
  }
}

pedra.addEventListener('click', function () {
  jogadaPlayer = 'Rock'
})
papel.addEventListener('click', function () {
  jogadaPlayer = 'Paper'
})
tesoura.addEventListener('click', function () {
  jogadaPlayer = 'Scissors'
})

pedra.addEventListener('click', game)

papel.addEventListener('click', game)

tesoura.addEventListener('click', game)
