class Boy {

    constructor(x, y, width, height){

        var options = {

            isStatic: true
        }
        
        this.body = Bodies.rectangle(x, y, width, height,options);

        this.image = loadImage("boy.png");

        this.width = width;
        this.height = height;
        
     
    }

    display() {
        var pos = this.body.position;

        rectMode(CENTER);
        fill("pink");
        image(this.image,pos.x, pos.y, this.width, this.height);
    }

};