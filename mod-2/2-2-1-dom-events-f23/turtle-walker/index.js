////////////////////////
// Global Data Values //
////////////////////////

const player = document.querySelector("#player");
const playerPosition = {
  x: 0,
  y: 0,
  rotation: 0,
}

//////////////////////////
// DOM Helper Functions //
//////////////////////////

const movePlayer = (x, y) => {
  playerPosition.x = x;
  playerPosition.y = y;
  player.style.left = `${x}px`;
  player.style.top = `${y}px`;
};

const rotateTurtle = () => {
  playerPosition.rotation += 90;
  player.style.transform = `rotate(${playerPosition.rotation}deg)`;
}

////////////////////
// Event Handlers //
////////////////////

/* 
every event has an event.target property that holds the Element
that the event was fired on
*/
const handlePlayerClick = (event) => {
  // console.log(event);
  rotateTurtle();
};

/* 
mousemove events have event.x and event.y properties for the 
position of the mouse on the screen when the event fires
*/
const handleMouseMove = (event) => {
  // console.log(event);
  const xOffset = 35; // to help position the turtle in the middle of the mouse
  const yOffset = 25; // to help position the turtle in the middle of the mouse
  movePlayer(event.x - xOffset, event.y - yOffset);
};

/* 
keydown (and other keyboard) events have an event.key property
which is a string representing the key that was pressed.
*/
const handleKeyDown = (event) => {
  // console.log(event);
  let x = playerPosition.x;
  let y = playerPosition.y;

  if (event.key === 'ArrowLeft') x -= 15;
  if (event.key === 'ArrowUp') y -= 15;
  if (event.key === 'ArrowRight') x += 15;
  if (event.key === 'ArrowDown') y += 15;
  if (event.key === ' ') rotateTurtle();

  movePlayer(x, y);
};

/////////////////
// Main Runner //
/////////////////

const main = () => {
  player.addEventListener('click', handlePlayerClick)
  document.querySelector('main').addEventListener('mousemove', handleMouseMove);
  document.body.addEventListener('keydown', handleKeyDown);
}

main();