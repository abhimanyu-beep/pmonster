class Monster{

    constructor(x,y,radius){
        
        var options = {
            isStatic:true,
            frictionAir:0.1
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("images/Monster-01.png")
        this.body = Bodies.circle(this.x,this.y,(this.radius/2),options)
        World.add(world,this.body)
    }

    display(){

        var position=this.body.position;
			push()
			translate(position.x, position.y);
			rectMode(CENTER)
			fill("white")
			ellipse(0,0,this.radius, this.radius);
			pop()
			

    }



}