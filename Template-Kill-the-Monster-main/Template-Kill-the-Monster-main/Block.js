class Block{
    constructor(x,y,Width,Height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':20,
        }

        this.body = Bodies.rectangle(x,y,Width,Height,options)
        this.Width = Width;
        this.Height = Height;
        World.add(world,this.body)
    }

    display(){
        var pos  = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        strokeWeight(4)
        stroke("black")
        fill("red")
        rect(0,0,this.Width,this.Height)
        pop();
			
			

    }

}