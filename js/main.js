 let game = new Game();
 let bg = new Background();


 function setup() {
     createCanvas(innerWidth, innerHeight);
     game.setup()

 }

 function draw() {
     clear();
     bg.draw();
     frameRate(140);
     game.draw();

 }