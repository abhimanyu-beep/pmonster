class Ground{
    constructor(x,y,Width,Height){
        var options = {
            isStatic:true,
            friction:0.1,
            restitution:0.25,
            density:1,
        }

        this.body = Bodies.rectangle(x,y,Width,Height,options)
        this.Width = Width;
        this.Height = Height;
        World.add(world,this.body)
    }

    display(){

        rect(this.body.position.x,this.body.position.y,this.Width,this.Height)
        fill("white")
			
			

    }


    
}