 let game01 = new Game();
 let bg = new Background();

 function setup() {
     createCanvas(innerWidth, innerHeight);


 }

 function draw() {
     clear();

     bg.draw();
     frameRate(140);
     game01.draw();

 }