class Game {
    constructor(){
  
    }
  
  
    start(){
      if(gameState === 0){
        form = new Form();
        form.display();
      }
    }
  
    play(){
      form.hide();
      
        //background("");
        
        var index = 0;
  
        var x = 100;
        var y = 100;
        var player;
        var injection;
        
        level = 1;

        //console.log(mouseX);
        //console.log(mouseY)
        
      player = new Player(x,y);  
      
      //player.display();
      //player.addAnimation("handgun",playerI_h);
      


     

      //console.log(player.x);
      //console.log(player.y);

      bullet = new Injection(player.x,player.y);
      //bullet.display();
      
      zombie1 = createSprite(0,0);
      zombie1.addAnimation("zombie1",zombie1_imgW);
      zombie1.scale = 0.5;
      
      var healthbar1 = createSprite(zombie1.x - 50,zombie1.y-50);
      healthbar1.addImage("healthbar", healthbarF);
      healthbar1.scale = 0.5;

      zombie2 = createSprite(50,0);
      zombie2.addAnimation("zombie2",zombie1_imgW);
      zombie2.scale = 0.5;

      var healthbar2 = createSprite(zombie1.x - 50,zombie1.y-50);
      healthbar2.addImage("healthbar", healthbarF);
      healthbar2.scale = 0.5;

      zombie3 = createSprite(100,0);
      zombie3.addAnimation("zombie3",zombie1_imgW);
      zombie3.scale = 0.5;

      var healthbar3 = createSprite(zombie1.x - 50,zombie1.y-50);
      healthbar3.addImage("healthbar", healthbarF);
      healthbar3.scale = 0.5;

      zombie4 = createSprite(150,0);
      zombie4.addAnimation("zombie4",zombie1_imgW);
      zombie4.scale = 0.5;

      var healthbar4 = createSprite(zombie1.x - 50,zombie1.y-50);
      healthbar4.addImage("healthbar", healthbarF);
      healthbar4.scale = 0.5;

      zombies = [zombie1, zombie2, zombie3, zombie4];

      camera.position.x = displayWidth/2;
      camera.position.y = y;

      zombie1.attractionPoint(5,player.x,player.y);
      zombie2.attractionPoint(5,player.x,player.y);
      zombie3.attractionPoint(5,player.x,player.y);
      zombie4.attractionPoint(5,player.x,player.y);


      if (bullets === 0){
        song.play("images/empty.mp3");
      }

      if (isTouching(zombie1,player)){
        zombie1.addAnimation("zombie",zombie1_imgF);
        player_hp = player_hp - zombie_d;
      }
      if (isTouching(zombie2,player)){
        zombie2.addAnimation("zombie",zombie1_imgF);
        player_hp = player_hp - zombie_d;
      }
      if (isTouching(zombie3,player)){
        zombie3.addAnimation("zombie",zombie1_imgF);
        player_hp = player_hp - zombie_d;
      }
      if (isTouching(zombie4,player)){
        zombie4.addAnimation("zombie",zombie1_imgF);
        player_hp = player_hp - zombie_d;
      }



      if (isTouching(bullet,zombie1)){
        zombie_hp1 = zombie_hp1 - injection_d;
      }
      if (isTouching(bullet,zombie2)){
        zombie_hp2 = zombie_hp2 - injection_d;
      }
      if (isTouching(bullet,zombie1)){
        zombie_hp3 = zombie_hp3 - injection_d;
      }
      if (isTouching(bullet,zombie1)){
        zombie_hp4 = zombie_hp4 - injection_d;
      }

      if (zombie_hp1 === 0 ){
        zombie1.destroy();
        score = score + 100;
      }
      if (zombie_hp2 === 0 ){
        zombie2.destroy();
        score = score + 100;
      }
      if (zombie_hp3 === 0 ){
        zombie3.destroy();
        score = score + 100;
      }
      if (zombie_hp4 === 0 ){
        zombie4.destroy();
        score = score + 100;
      }

      
      
      if (level ===1){
        gun = "pistol";
        gameState3 = "pistol";
        zombie_hp1 = 10;
        zombie_hp2 = 10;
        zombie_hp3 = 10;
        zombie_hp4 = 10;
        if (keyDown("2")){
          text("you will unlock this Gun in the next level", displayWidth/2 - 200,displayHeight/2);
        }
        if (keyDown("3")){
          text("you will unlock this Gun in the third level", displayWidth/2 - 200,displayHeight/2);
        }
      }

      if (level === 2){
        if (keyDown("2")){
          gun = "ar";
          gameState3 = "ar";
        }
        if (keyDown("1")){
          gun = "pistol";
          gameState3 = "pistol";
        }
        if (keyDown("3")){
          text("you will unlock this Gun in the next level", displayWidth/2 - 200,displayHeight/2);
        }
        zombie_hp1 = 20;
        zombie_hp2 = 20;
        zombie_hp3 = 20;
        zombie_hp4 = 20;

  
      }

      if (level === 3){
        if (keyDown("3")){
          gun = "shotgun";
          gameState3 = "shotgun";
        }
        if (keyDown("2")){
          gun = "ar";
          gameState3 = "ar";
        }
        if (keyDown("1")){
          gun = "pistol";
          gameState3 = "pistol";
        }
        zombie_hp1 = 30;
        zombie_hp2 = 30;
        zombie_hp3 = 30;
        zombie_hp4 = 30;
      }

      //function keyPressed(){ if(keyCode === 32){ // slingshot.attach(bird.body); } }


      if(keyCode || keyIsDown("w")){
        player.y = player.y - 10;
        //playerImg =  loadAnimation("playerImg", playerW_h)
        gameState2 = "walk";

        //player.addAnimation(playerW_h);
      }     

      if (keyIsDown(DOWN_ARROW)|| keyIsDown("s") ){
        player.y = player.y + 10;
        gameState2 = "walk";

        //playerImg =  loadAnimation("playerImg", playerW_h)
        //player.addAnimation(playerW_h);
      }

      if (keyIsDown(RIGHT_ARROW)||keyIsDown("d")){
        player.x = player.x+10;
        gameState2 = "walk";
        //playerImg =  loadAnimation("playerImg", playerW_h)
        //player.addAnimation(playerW_h);
      }

      if (keyIsDown(LEFT_ARROW)||keyIsDown("a")){
        player.x = player.x - 10;
        gameState2 = "walk";
        //playerImg =  addAnimation("playerImg", playerW_h)
        //player.addAnimation(playerW_h);
      }
      if (keyIsDown("r")){
        bullets = magazineSize;
      }
      
      bullet.display();
      player.display();
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
    }
  }
  