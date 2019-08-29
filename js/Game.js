class Game {

    constructor() {
        this.player = new Player();
        this.goods = [];
        this.obstacles = [];
        this.getPoint = 0;
        this.timeLimit = 60;
        this.getPrice = 0;

        // this.background1 = new Background();
    }




    setup() {
        this.player.setup();



    }


    // colision check
    colisionBox(obj, player) {
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

    endGame(name) {
        startGame = false;
        document.querySelector(name).style.display = "block";
    }

    draw() {
        if (startGame) {
            if (!catVoice.isPlaying()) {
                catVoice.play()

            }
        }
        this.player.draw();

        // if (startGame) {
        //     ;
        // }
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
                console.log("hit")
                // if (good.switch === 0) {
                this.goods.splice(index, 1)
                this.getPrice += good.goodsPrice
                this.getPoint += 1;
                catVoice.play();

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

            const hittedBox = this.obstacles[idx].switch;
            if (hittedBox === 0) {
                if (this.colisionBox(obst, this.player)) {
                    image(playerDameged, this.x, this.y, playerImg.width / 6, playerImg.height / 6);
                    this.timeLimit -= 3
                    this.obstacles[idx].switch = 1
                }
            }

        })


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

        // game end
        if (this.timeLimit <= 0) {
            this.endGame('.endGame');
            //inside the end text
            document.querySelector('.endGame').innerHTML = `
            <h2> Thank you, your order has been placed </h1> <p> </p> 
            <h2> you saved ${this.getPoint} stray cats </h2> 
            <p> <h2> your X will lose $ ${this.getPrice} </h2></p >
             <p>
         <button class="btn restart"> Continue Shopping ? </button> </p>
      `
            //when clicking the button  the game start
            document.querySelector('.restart').onclick = () => {
                this.timeLimit = 60;
                document.querySelector('.endGame').style.display = "none";
                location.reload();

            }
        }
        //point and prize
        // text()

    }
}