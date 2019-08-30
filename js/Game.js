class Game {

    constructor() {
        this.player = new Player();
        this.goods = [];
        this.obstacles = [];
        this.getPoint = 0;
        this.timeLimit = 120;
        this.getPrice = 0;

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
    // when the game is over calling a page(div)
    endGame(name) {
        startGame = false;
        document.querySelector(name).style.display = "block";
    }

    draw() {

        //BGM when the game starts
        if (startGame) {
            if (!bgm.isPlaying()) {
                bgm.play()
            }
        }
        this.player.draw();


        //create goods with different colors differnt frame count

        if (frameCount % 100 === 0)
            this.goods.push(new Goods())
        if (frameCount % 200 === 0)
            this.goods.push(new GoodsGreen())
        if (frameCount % 500 === 0)
            this.goods.push(new GoodsRed())

        this.goods.forEach((good, index) => {

            // cat food price and cat food will be removed
            good.draw()
            if (this.colisionBox(good, this.player)) {
                console.log("hit")
                this.goods.splice(index, 1)
                this.getPrice += good.goodsPrice
                this.getPoint += 1;
                mouse.play();

                // cat food * 5  inclease 5sec 
                this.getPoint % 5 === 0 ? this.timeLimit += 5 : this.timeLimit;

            } // cat food should be max 5 in monitor
            if (this.goods.length > 5)
                this.goods.splice(index, 2)
        })

        // create obstacle with random

        if (frameCount % 65 === 0) {
            //monitor less than 1100 px
            if (innerWidth < 1100) {

                this.obstacles.push(new Obstacles())
                this.obstacles.push(new Obstacles())
            }
            // monitor more than 1100 px
            if (innerWidth > 1100) {
                this.obstacles.push(new Obstacles())
                this.obstacles.push(new Obstacles())
                this.obstacles.push(new Obstacles())
            }

        }
        // amazon box will be delite when it disappierd 
        this.obstacles.forEach((obst, idx) => {
            if (obst.y + obst.sizeH <= 0) {
                this.obstacles.splice(idx, 1)
            }
            obst.draw()

            //  colision  amazonbox reduce 3sec change img
            const hittedBox = this.obstacles[idx].switch;
            if (hittedBox === 0) {
                if (this.colisionBox(obst, this.player)) {
                    this.timeLimit -= 3
                    this.obstacles.splice(index, 1)
                    this.obstacles[idx].switch = 1
                    catVoice.play();

                }
            }

        })


        //side color
        rect(0, 0, innerWidth / 4, innerHeight);
        rect(innerWidth * 3 / 4, 0, innerWidth / 4, innerHeight)

        // time count 
        //   food. price count side bar
        fill("white")
        textSize(20);
        textAlign(CENTER, TOP);
        text(`Cat food \n${this.getPoint}\n\n Price \n $ ${this.getPrice}\n\n Time \n${this.timeLimit}`, innerWidth * 9 / 11, innerHeight / 12);
        if (frameCount % 60 == 0 && this.timeLimit > 0) {
            this.timeLimit--;
        }

        // game end
        if (this.timeLimit <= 0) {
            this.endGame('.endGame');
            //inside the end text
            document.querySelector('.endGame').innerHTML = `
           <p class="text-end">
            <h3> Thank you, your order has been placed </h2> <p> </p> 
            <br/>
            <h3> you saved ${this.getPoint} stray cats </h2> 
            </br>
            <p> <h3> the person you love will pay $ ${this.getPrice} </h2></p >
             <p>
             <br/>
         <button class="btn restart"> Continue Shopping ? </button> </p>
         </p>
      `
            //when clicking the button  the game start
            document.querySelector('.restart').onclick = () => {
                document.querySelector('.endGame').style.display = "none";
                location.reload();

            }
        }
        //point and prize
        // text()

    }
}