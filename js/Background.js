class Background {
    constructor() {
        this.leftx = innerWidth / 4;
        this.rightx = innerWidth * 3 / 4;
        // this.y = 20;
        // this.x = 10;
    };

    setup() {


    };

    draw() {
        //background color
        push()
        background(0, 0, 0)
       
        this.x += 0.8;
        if (this.x == 255);
        pop()
        // this.y += 5;


        // border
        strokeWeight(2)
        this.lineLeft = line(innerWidth / 4, 0, innerWidth / 4, innerHeight)
        this.lineRight = line(innerWidth * 3 / 4, 0, innerWidth * 3 / 4, innerHeight)

       
        rect(0, 0, innerWidth / 4, innerHeight)
        rect(innerWidth * 3 / 4, 0, innerWidth / 4, innerHeight)




    }

}