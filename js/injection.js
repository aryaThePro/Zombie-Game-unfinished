class Injection{
    constructor(x, y) {
        this.body = Bodies.rectangle(x, y);
        World.add(world, this.body);
        this.image = loadImage("images/injection.png");
    }
    display(){

        Pangle =   Math.atan(mouseY-this.body.position.y, mouseX-this.body.position.x);        
        //var angle = this.body.angle;
       
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(Pangle + radians(-90));
        imageMode(CENTER);
        image(this.image, 0, 0, 10,10);
      }
}