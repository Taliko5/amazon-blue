class Obstacles {
    constructor(pos = 0) {
        this.x = this.setRandomPosition() + pos //posrandom(amazonBox.width, innerWidth - amazonBox.width) //innerWidth / 4;this.setRandomPosition() + pos
        this.y = innerHeight;
        this.switch = 0;

    }

    setRandomPosition() {
        this.width = amazonBox.width / 3;
        this.height = amazonBox.height / 3
        return (bg.leftx - 20) + Math.floor(Math.random() * (bg.rightx - bg.leftx - 150))

    }
    setup() {

    }


    draw() {
        this.speedUp();
        // let imageA = amazonBox.forEach(box);
            image(amazonBox, this.x, this.y, amazonBox.width / 3, amazonBox.height / 3);
        // fill('lightyellow');
        // strokeWeight(3);
        // rect(this.x, this.y, this.sizeW, this.sizeH, );
        this.y -= 3;

    }

    speedUp() {
        if (keyIsDown(40))
            this.y -= 3;

    }




}