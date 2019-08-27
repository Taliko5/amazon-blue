class Goods {
    constructor() {
        this.x = Math.random() * innerWidth;
        this.y = Math.random() * innerHeight;
    };

    setup() {
        ellipseMode(RADIUS);
        // Set the starting position of the shape


    };

    draw() {

        fill(0, 0, random(25));
        fill(0, 0, random(255));
        ellipse(this.x, this.y, random(100), random(60));


        this.y -= random(7,-7);
        if (this.y <= 1) {
            this.y = innerHeight;
        }
        this.x +=  random(30,-30);

        // if (this.x <= 0 || this.x >= innerWidth) {
        //     this.x = innerWidth;
        // }

    };


}