let catVoice;
let bgm;
let amazonBox;
let playerImg;
let index;
let instruction;
let mouse;


function preload() {
    //sound
    catVoice = loadSound("sound/catvoice.mp3");
    bgm = loadSound("sound/bgsound01.mp3")
    mouse = loadSound("sound/mouse.mp3")
    // game.obstacles1.forEach(e => e.setup());
    //images
    amazonBox = loadImage("img/amazon/box1.png");
    playerImg = loadImage("img/player1.png");
    playerDameged = loadImage("img/player6.png");
    index = loadImage("img/top02.png");
    instruction = loadImage("img/amazon02.png");



}

// console.log(amazonBox)