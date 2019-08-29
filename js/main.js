 let game = new Game();
 let bg = new Background();
 let startGame = false;

 function setup() {
     const canvas = createCanvas(innerWidth, innerHeight);
     canvas.parent("gameBoard");
     game.setup();
     ellipseMode(CORNER);

 }


 document.querySelector('.top1').onclick = function () {
     document.querySelector('.startScreen').style.display = 'none';
     document.querySelector('.instructionScreen').style.display = "block";
 }

 document.querySelector('.game').onclick = () => {
     document.querySelector('.instructionScreen').style.display = "none"
     startGame = true;
 }


 function draw() {
     if (startGame) {
         clear();
         bg.draw();
         frameRate(140);
         game.draw();
     }



 }


 //  document.querySelector('.startGame').onclick = function () {