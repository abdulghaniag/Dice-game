let win = 6;

// Get elements
let shakeBtn = document.getElementById("shake");
let shakeBtn2 = document.getElementById("shaking");
let tryAgainBtn;

// Player 1
shakeBtn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * 6) + 1;
  console.log("Player 1:", random);
  document.getElementById("image").src = `./images/${random}.png`;

  if (random === win) {
    console.log("Player 1 Wins");
    document.getElementById("win").innerText = "🎉 Player 1 Wins!";
    endGame();
  }
});

// Player 2
shakeBtn2.addEventListener("click", function () {
  let random = Math.floor(Math.random() * 6) + 1;
  console.log("Player 2:", random);
  document.getElementById("diceimg").src = `./images/${random}.png`;

  if (random === win) {
    console.log("Player 2 Wins");
    document.getElementById("winner").innerText = "🎉 Player 2 Wins!";
    endGame();
  }
});

// Game Over function
function endGame() {
  shakeBtn.disabled = true;
  shakeBtn2.disabled = true;

  // Create Try Again button
  tryAgainBtn = document.createElement("button");
  tryAgainBtn.innerText = "🔄 Try Again";
  tryAgainBtn.style.marginTop = "30px";
  tryAgainBtn.style.padding = "10px 25px";
  tryAgainBtn.style.fontSize = "16px";
  tryAgainBtn.style.borderRadius = "25px";
  tryAgainBtn.style.border = "none";
  tryAgainBtn.style.cursor = "pointer";
  tryAgainBtn.style.background = "linear-gradient(to right, #ff4e50, #f9d423)";
  tryAgainBtn.style.color = "#fff";
  tryAgainBtn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)";
  tryAgainBtn.style.transition = "all 0.3s ease";

  tryAgainBtn.addEventListener("click", resetGame);

  document.body.appendChild(tryAgainBtn);
}

// Reset function
function resetGame() {
  document.getElementById("image").src = "./images/1.png";
  document.getElementById("diceimg").src = "./images/1.png";
  document.getElementById("win").innerText = "";
  document.getElementById("winner").innerText = "";

  shakeBtn.disabled = false;
  shakeBtn2.disabled = false;

  // Remove Try Again button
  tryAgainBtn.remove();
}


























// let win = 6
// document.getElementById("shake").addEventListener("click" , function(){
//     let random = Math.floor(Math.random()*6)+1;
//     console.log(random);
//     document.getElementById("image").src = `./images/${random}.png`

//     if(random == win){
//  console.log("Player 1 is Win");
//  document.getElementById("win").innerText = "You Winner"
//     }
// })


// // Player02
// let winner = 6
// document.getElementById("shaking").addEventListener("click" , function(){
//     let random = Math.floor(Math.random()*6)+1
//     console.log(random);
//     document.getElementById("diceimg").src = `./images/${random}.png`
// if(random == win){
//  console.log("Player 2 is Win");
//  document.getElementById("winner").innerText = "You Winner"
//     }
// })
