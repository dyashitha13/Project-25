class Paper{
     constructor(){
        var options = {
			isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        } 
        this.body = Bodies.circle(100, 650, 22, options);
        World.add(world, this.body);
        //Matter.Bodies.circle(this.paper);
        this.image = loadImage("paper.png");
    }
    display(){
    var pos = this.body.position;
    fill("white");
    imageMode(RADIUS);
    image(this.image,pos.x,pos.y,25,25);    
    }
}


