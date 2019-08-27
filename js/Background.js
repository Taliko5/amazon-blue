class Background {
    constructor() {
        this.leftx = innerWidth / 4;
        this.rightx = innerWidth * 3 / 4;
        // this.y = 20;
        this.x = 10;
    };

    setup() {


    };

    draw() {
        push()
        background(this.x, 255, 255)
        this.x += 0.8;
        if (this.x == 255);
        pop()
        this.y += 5;

        strokeWeight(2)
        this.lineLeft = line(innerWidth / 4, 0, innerWidth / 4, innerHeight)
        this.lineRight = line(innerWidth * 3 / 4, 0, innerWidth * 3 / 4, innerHeight)

        fill("pink")
        rect(0, 0, innerWidth / 4, innerHeight)
        rect(innerWidth * 3 / 4, 0, innerWidth / 4, innerHeight)




    }

}