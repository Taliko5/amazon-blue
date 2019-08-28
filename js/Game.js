class Game {

    constructor() {
        this.player = new Player();
        this.goods = [];
        this.obstacles = [];
        this.getPoint = 0;
        this.timeLimit = 65;
        this.getPrice = 0;
        
        // this.background1 = new Background();
    }

    setup() {
        //  background('rgb(22, 13, 120)')
        // this.obstacles.setRandomPosition();
        // this.goods.setup();
        preload();
        this.player.setup();

    }


    draw() {
        this.player.draw();
        //create goods with different colors differnt frame count

        if (frameCount % 90 === 0)
            this.goods.push(new Goods())
        if (frameCount % 300 === 0)
            this.goods.push(new GoodsGreen())
        if (frameCount % 500 === 0)
            this.goods.push(new GoodsRed())

        this.goods.forEach((good, index) => {

            good.draw()
            // if (this.colisionBox(good, this.player))
            //     if (good.switch === 0) {
            //         this.goods.splice(index, 1)
            //         this.getPrice += good.goodsPrice
            //         good.switch === 1;

            //     }
            if (this.goods.length > 5)
                this.goods.splice(index, 2)

        })

        for (let i = 0; i < this.goods.length - 1; i++) {
            if (this.colisionBox(this.goods[i], this.player)) {
              this.getPrice += this.goods[i].goodsPrice;
                this.goods.splice(i, 1)
                

            }
        }



        // create obstacle with random
        if (frameCount % 65 === 0) {
            if (innerWidth < 1100) {

                this.obstacles.push(new Obstacles())
                this.obstacles.push(new Obstacles())
            }
            if (innerWidth > 1100) {
                this.obstacles.push(new Obstacles())
                this.obstacles.push(new Obstacles())
                this.obstacles.push(new Obstacles())
            }

        }
        this.obstacles.forEach((obst, idx) => {

            if (obst.y + obst.sizeH <= 0) {
                this.obstacles.splice(idx, 1)
            }
            obst.draw()

            if (this.colisionBox(obst, this.player)) {}


        })


        //  colision  amazonbox
        this.obstacles.forEach((obs, idx) => {
            if (this.colisionBox(obs, this.player)) {

                this.obstacles[idx].switch = 1;
                this.timeLimit -= 5;

            }
            // if (this.obstacles[idx].switch = 0) {
        })

        // })
        //   if (this.obstacles[idx].intersects(this.player))
        //       this.timeLimit -= 5;

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
        text(`Cat food \n ${this.getPoint}\n Price \n $ ${this.getPrice}\n Time \n${this.timeLimit}`, innerWidth * 8 / 10, innerHeight / 12);
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
        // console.log(player.x, player.y, player.width, player.height)
        if (player.x + player.width <= obj.x ||
            obj.x + obj.width <= player.x) {
            return false
        }
        if (player.y + player.height <= obj.y ||
            obj.y + obj.height <= player.y) {
            return false;
        } {
            return true;
        }

    }



    // console.log(colisionBox(obstacles, player))


}