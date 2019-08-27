class Game {

    constructor() {
        this.player1 = new Player;
        this.goods = [];
        this.obstacles1 = [];


        // this.background1 = new Background();
    }

    setup() {
        //  background('rgb(22, 13, 120)')
        this.Obstacles1.setRandomPosition();
        this.goods1.setup();

    }


    draw() {
        this.player1.draw();
        this.goods.forEach(good => good.draw())

        // if (frameCount % 120 === 0) {
        //     this.goods.push(new Goods())
        // }


        if (frameCount > 20 && frameCount % 60 === 0)
            for (let i = 0; i < random(2); i++) {
                this.obstacles1.push(new Obstacles(this.obstacles1.x, this.obstacles1.y));
            }
        this.obstacles1.forEach((obst, index) => {

            if (obst.y + obst.sizeH <= 0) {
                this.obstacles1.splice(index, 1)
            }
            obst.draw();
        });
        fill("pink")
        rect(0, 0, innerWidth / 4, innerHeight)
        rect(innerWidth * 3 / 4, 0, innerWidth / 4, innerHeight)

    }



}