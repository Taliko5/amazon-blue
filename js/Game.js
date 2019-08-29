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

    // colision check
    colisionBox(obj, player) {
        // console.log(player.x, player.y, player.width, player.height)
        if (player.x + player.width <= obj.x ||
            obj.x + obj.width <= player.x) {
            return false
        }
        if (player.y + player.height <= obj.y ||
            obj.y + obj.height <= player.y) {
            return false;
        }

        return true;

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
            if (this.colisionBox(good, this.player)) {

                // if (good.switch === 0) {
                this.goods.splice(index, 1)
                this.getPrice += good.goodsPrice
                this.getPoint += 1;

                // }
            }
            if (this.goods.length > 5)
                this.goods.splice(index, 2)
        })

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
            //  colision  amazonbox

            let hittedBox = this.obstacles[idx].switch;
            if (hittedBox === 0) {
                if (this.colisionBox(obst, this.player)) {
                    this.obstacles[idx].switch = 1
                    this.timeLimit -= 5

                }
            }

        })

        // return Math.parseInt(this.timeLimit)
        //   this.obstacles.splice(idx, 1)

        //  colision  amazonbox
        // this.obstacles.forEach((obs, idx) => {
        //     if (this.colisionBox(obs, this.player)) {

        //         if(this.obstacles[idx].switch = 0){
        //         this.timeLimit -= 5;
        //         this.obstacles[idx].switch = 1
        //         }
        //     }
        //     // if (this.obstacles[idx].switch = 0) {
        // })

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





    // console.log(colisionBox(obstacles, player))


}