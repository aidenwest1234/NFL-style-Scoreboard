let team1 = document.getElementById("player1-score")
let team2 = document.getElementById("player2-score")
let score1 = 0 
let score2 = 0 

function teamone1() {
  score1 += 1
  team1.textContent = score1
}

function teamone2() {
  score1 += 2
  team1.textContent = score1
}

function teamone3() {
  score1 += 3
  team1.textContent = score1
}

function teamtwo1() {
  score2 += 1
  team2.textContent = score2
}

function teamtwo2() {
  score2 += 2
  team2.textContent = score2
}

function teamtwo3() {
  score2 += 3
  team2.textContent = score2
}