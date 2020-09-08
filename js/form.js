class Form {

    constructor() {
      this.background = createImg('images/loading screen.png');
      this.button = createImg('images/play icon.png');
      this.title = createImg('images/Title.png');
      this.survivor = createImg('images/Survivor.gif');
      this.zombie = createImg('images/Zombie.gif');
      this.note = createElement('h3');
      
      //this.image = createImage("images/loading screen.png");
      //background("images/loading screen.png");
      
    }
    hide(){
      this.background.hide();
      this.button.hide();
      this.title.hide();
      this.survivor.hide();
      this.zombie.hide();
      this.note.hide();
    }
    
    
    display(){
      //console.log(mouseX);
      
      this.background.position(0,0);
      this.title.position(250, 50); 
      this.survivor.position(500, displayHeight/2 + 100);
      this.zombie.position(700, displayHeight/2 + 110);
      this.note.html("Note: the graphics of the game may depend on the performance of your device");
      this.note.position(displayWidth/2 - 100, displayHeight/2 + 500);

      //this.title.resize(50,50);
      this.button.position(displayWidth/2 -50, displayHeight/2);
      

      this.button.mousePressed(()=>{
        
        gameState = 2;
        this.button.hide();
      });
  

    }
  }
  