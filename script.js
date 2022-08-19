let restartBTN=document.getElementById('restartbtn');
let tiles=Array.from(document.getElementsByClassName('tile'));

let X_text="X";
let O_text="O";
let currentPlayer=X_text;
let boxes=Array(9).fill(null);

restartBTN.addEventListener('click',restart);

const startGame=()=>{
  tiles.forEach(box=>box.addEventListener('click',boxClicked))
}

function boxClicked(e){
  let id=e.target.id;
  console.log(id)
  if(!boxes[id]){
    boxes[id]=currentPlayer;
    e.target.innerText=currentPlayer;
    if(playerWon()!==false){
      playerText=`${currentPlayer} has won!`;
      let winningblocks=playerWon();
      console.log(winningblocks)
      console.log(boxes)
      winningblocks.map(box=>tiles[box].classList.add('winningTile'))
      return
    }
    currentPlayer=currentPlayer== X_text?O_text:X_text;
  }
}
startGame(); 

const winningPositions=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

function playerWon(){
  for(const condition of winningPositions){
    let [a,b,c]=condition;
    if(boxes[a] && (boxes[a]===boxes[b] && boxes[a]===boxes[c])){
      return [a,b,c];
    }
  }
  return false;
}

function restart(){
  boxes.fill(null);
  tiles.forEach(box=>box.innerText='');
  currentPlayer=X_text;
  tiles.forEach(box=>box.classList.remove('winningTile'))
}