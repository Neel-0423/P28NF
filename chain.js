class Chain {
    constructor(bodyA,bodyB){

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness:0.01,
            length: 10
        }

        this.chain = Constraint.create(options);
        World.add(world, this.chain);

         }

         fly(){
            this.chain.bodyA= null;
        }
    

    display(){


        strokeWeight(4);
       
    }
}
