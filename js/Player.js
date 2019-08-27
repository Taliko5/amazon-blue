class Player {
    constructor() {
        this.x = innerWidth / 2 - 50;
        this.y = 200;
        this.x2 = (innerWidth / 2 - 50) + 100
        this.gravity = 0.4;
        this.x
    }

    setup() {


    }

    draw() {
        this.move();
        fill('red')
        rect(this.x, this.y, 100, 100)


    }



    move() {
        if (keyIsDown(37) && this.x > innerWidth / 4 + 5)
            this.x -= 5;


        if (keyIsDown(39) && (this.x + 100) < innerWidth * 3 / 4 - 5)
            this.x += 5;
    
          if (keyIsDown(40))
              this.y += 0.5;

              if (keyIsDown(38))
                  this.y -= 0.5;
                 

    }

}