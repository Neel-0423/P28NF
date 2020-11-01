class Mango {

    constructor(x, y, width, height){

        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.image = loadImage("mango.png");
        this.width = width;
        this.height = height;
        
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;

        rectMode(CENTER);
        fill("yellow");
        image(this.image,pos.x, pos.y, this.width, this.height);
    }

};