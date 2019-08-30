class Player {
    constructor() {
        this.x = innerWidth / 2 - 50;
        this.y = 50;
        this.gravity = 0.4;

    }

    setup() {

        this.width = 346 / 6;
        this.height = 600 / 6;

    }

    draw() {
        this.move();

        image(playerImg, this.x, this.y, playerImg.width / 6, playerImg.height / 6);

        // fill('white')
        // triangle(300, 90, 330, 10, 360, 90);;

    }



    move() {
        // go left
        if (keyIsDown(37) && this.x > innerWidth / 4 + 5)
            this.x -= 5;
        // go right
        if (keyIsDown(39) && (this.x + 100) < innerWidth * 4 / 5  - 4 )
            this.x += 5;
        // go up
        if (keyIsDown(40))
            this.y += 0.2;
        // go down
        if (keyIsDown(38))
            this.y -= 0.2;




    }

}