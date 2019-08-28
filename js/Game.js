class Game {

    constructor() {
        this.player = new Player();
        this.goods = [];
        this.obstacles = [];
        this.getPoint = 1;
        this.timeLimit = 60;
        this.getPrice = 1;
        // this.background1 = new Background();
    }

    setup() {
        //  background('rgb(22, 13, 120)')
        this.obstacles.setRandomPosition();
        this.goods.setup();
        preload();

    }


    draw() {
        this.player.draw();

        //create goods with different colors differnt frame count

        if (frameCount % 200 === 0)
            this.goods.push(new Goods())
        if (frameCount % 300 === 0)
            this.goods.push(new GoodsGreen())
        if (frameCount % 500 === 0)
            this.goods.push(new GoodsRed())

        this.goods.forEach((good, index) => {
            if (this.goods.length > 5) {
                this.goods.splice(index, 1)
            }
            good.draw()
        })

        // create obstacle with 
        if (frameCount > 10 && frameCount % 65 === 0) {

            //if the monitor is larger than 1400 changing obstacle' number
            const num = innerWidth > 600 ? 4 : 3;
            const randNum = random(num)
            const rand = Math.ceil(randNum)
            //console.log(innerWidth)
            //push class

            if (rand === 3) {
                let obj1 = new Obstacles()
                let obj2 = new Obstacles()
                if (obj1.x + obj1.width < obj2.x)
                    this.obstacles.push(new Obstacles());
                } else if (rand === 2) {
                    let lastInd = this.obstacles.length - 1
                    this.obstacles.push(new Obstacles(-20));
                    this.obstacles.push(new Obstacles(this.obstacles[lastInd] + 10));
                } else if (rand === 3) {
                    let lastInd = this.obstacles.length - 1
                    this.obstacles.push(new Obstacles(-20));
                    this.obstacles.push(new Obstacles(this.obstacles[lastInd] + 20));
                    this.obstacles.push(new Obstacles(this.obstacles[lastInd]));
                }
            }
            //  }
       
        // creating  amazon boxes
        this.obstacles.forEach((obst, idx) => {

            if (obst.y + obst.sizeH <= 0) {
                this.obstacles.splice(idx, 1)
            }
            obst.draw();
        })

           //  colision  amazonbox
             
             this.obstacles.forEach((obs,idx)=>{
                 if(this.colisionBox(obs, this.player))
                  if (this.obstacles[idx].switch = 0){
                  this.timeLimit -= 5;
                 this.obstacles[idx].switch = 1;
                  }

             })

               
    //   this.obstacles.forEach((obj)=>{
    //        if (this.player.x + this.player.width <= obj.x ||
    //           obj.x + obj.width <= this.this.player.x)
    //           this.timeLimit -= 5;
    //       if (this.player.y + this.player.height <= obj.y ||
    //           obj.y + obj.height <= this.player.y)
    //           this.timeLimit -= 5;
            
    //   })


        //side color
        rect(0, 0, innerWidth / 4, innerHeight);


        rect(innerWidth * 3 / 4, 0, innerWidth / 4, innerHeight)

        // time count 
        //    textAlign(innerWidth / 5, innerHeight/5);
        fill("white")
        textSize(20);
        textAlign(CENTER, TOP);
        text(`Cat food \n ${this.getPoint}\n Price \n ${this.getPrice}\n Time \n${this.timeLimit}`, innerWidth * 7 / 10, innerHeight / 12);
        if (frameCount % 60 == 0 && this.timeLimit > 0) {
            this.timeLimit--;
        }
        if (this.timeLimit == 0) {
            image(gameOver, 0, 0, gameOver.width, gameOver.height);
        }
        //point and prize
        text()
    


    
}

    // colision to obstacles
    // player right 
     colisionBox(obj, player) {
        if (player.x + player.width <= obj.x ||
            obj.x + obj.width <= player.x){
            return false
            }
            if (player.y + player.height <= obj.y ||
                obj.y + obj.height <= player.y){
            return false;
                }{
            return true;
                }

    }


    // console.log(colisionBox(obstacles, player))


}