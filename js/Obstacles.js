class Obstacles {
    constructor(x, y) {
        this.x = this.setRandomPosition(); //innerWidth / 4;
        this.y = innerHeight;
        this.sizeW = 200;
        this.sizeH = 80
        this.gravity = 0.4;
    }


    setRandomPosition() {

        return (bg.leftx - 20) + Math.floor(Math.random() * (bg.rightx - bg.leftx - 150))

    }

    draw() {

        this.speedUp();
        fill('lightyellow')
        strokeWeight(3)
        rect(this.x, this.y, this.sizeW, this.sizeH)
        this.y -= 4;


    }

    speedUp() {
        if (keyIsDown(40))
            this.y -= 5;

    }




}