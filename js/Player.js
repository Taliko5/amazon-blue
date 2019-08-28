class Player {
    constructor() {
        this.x = innerWidth / 2 - 50;
        this.y = 50;
        this.gravity = 0.4;

    }

    setup() {

        this.width = playerImg.width / 6;
        this.height = playerImg.height / 6;

    }

    draw() {
        this.move();
        // fill('red')
        // rect(this.x, this.y, 100, 100)
        image(playerImg, this.x, this.y, playerImg.width / 6, playerImg.height / 6);

    }



    move() {
        // go left
        if (keyIsDown(37) && this.x > innerWidth / 4 + 5)
            this.x -= 5;
        // go right
        if (keyIsDown(39) && (this.x + 100) < innerWidth * 3 / 4 - 5)
            this.x += 5;
        // go up
        if (keyIsDown(40))
            this.y += 0.2;
        // go down
        if (keyIsDown(38))
            this.y -= 0.2;




    }

}