class Player{
                                                                                                                                                                                                                
    constructor(x, y) {
        this.body = Bodies.rectangle(x, y, 50, 50);
        
        //this.image = img;
        World.add(world, this.body);
    }
    display(){

        //pistol
        if (gun === "pistol"){
            if (gameState2 === "walk"){
                this.image = playerW_h;
            }
            if (gameState2 === "shoot"){
                this.image = playerS_h;
            }
            else{
                this.image = playerI_h;
            }
        }

        // ar
        if (gun === "ar"){
            if (gameState2 === "walk"){
                this.image = move_a;
            }
            if (gameState2 === "shoot"){
                this.image = shoot_a;
            }
            else{
                this.image = idle_a;
            }
        }

        //shotgun
        if (gun === "shotgun"){
            if (gameState2 === "walk"){
                this.image = move_s;
            }
            if (gameState2 === "shoot"){
                this.image = shoot_s;
            }
            else{
                this.image = idle_s;
            }
        }



        Pangle =   Math.atan(mouseY-this.body.y, mouseX-this.body.x);   
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(Pangle + radians(-90));    
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();
    }
}