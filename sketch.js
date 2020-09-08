const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var gameState2, gameState3;
var bg = "images/loading screen.png";
var collectedCoins;
var injection_d;
var bullet;
var Pangle;
var level;
var zombie_hp, zombie_hp1,zombie_hp2,zombie_hp3,zombie_hp4;
var player_hp;
var zombie_d;
var playerW_h, playerI_h, injection_img, zombie1_img, zombie1_imgW, zombie1_imgF, zombie2_imgW, zombie2_imgF,boss_F,boss_W, zombie3_img, zombie4_img ;
var canvas;
var form;
var gameState;
var player_img, img;
var zombie1, zombie2, zombie3, zombie4, zombie5;
var playerImg;
var playerX, playerY;
var zombie1_img, zombie2_img, zombie3_img, zombie4_img ,track, injection_img;
var zombies = [];
var game;
var form, form2;
var level;
var  backgroundImg;
var bullets, magzineSize;
const bulletVelocity = 5;
var healthbarF, healthbarD, healthbar_1, healthbar_2, healthbar_3, healthbar_4;
var bulletDamage = 10; 
var playButton;
var move_a, move_s, idle_a, idle_s, shoot_a, shoot_s;
var gun;
var selected_a, selected_h, selected_s, unselected_a, unselected_h, unselected_s;
var ak47, pistol, shotgun;
var score;
var magazineSize;

function preload(){

  backgroundImg = loadImage("images/loading screen.png");

  selected_a = loadImage("images/selected_a.png");
  selected_h = loadImage("images/selected_h.png");
  selected_s = loadImage("images/selected_s.png");

  unselected_a = loadImage("images/unselected_a.png");
  unselected_h = loadImage("images/unselected_h.png");
  unselected_s = loadImage("images/unselected_s.png");

  healthbarF = loadImage("images/health barF.png");
  healthbar_1 = loadImage("images/health bar-1.png");
  healthbar_2 = loadImage("images/health bar-2.png");
  healthbar_3 = loadImage("images/health bar-3.png");
  healthbar_4 = loadImage("images/health bar-4.png");
  healthbarD = loadImage("images/health barD.png");

  playButton = loadImage("images/play icon.png");

  song = loadSound("images/orchestra.mp3");

  injection_img = loadImage("images/injection.png");

  playerW_h = loadImage("images/moveH.gif");
  playerI_h = loadImage("images/idleH.gif");
  playerS_h = loadImage("images/Survivor.gif"); 

  move_s = loadImage("images/move_s.gif");
  idle_s  = loadImage("images/idle_s.gif");
  shoot_s  = loadImage("images/shoot_s.gif");

  move_a = loadImage("images/move_a.gif");
  shoot_a = loadImage("images/shoot_a.gif");
  idle_a = loadImage("images/idle_a.gif");

  zombie1_imgW = loadAnimation("images/skeleton-move_0.png","images/skeleton-move_1.png","images/skeleton-move_2.png","images/skeleton-move_3.png","images/skeleton-move_4.png","images/skeleton-move_5.png","images/skeleton-move_6.png","images/skeleton-move_7.png","images/skeleton-move_8.png","images/skeleton-move_9.png","images/skeleton-move_10.png","images/skeleton-move_11.png","images/skeleton-move_12.png","images/skeleton-move_13.png","images/skeleton-move_14.png","images/skeleton-move_15.png","images/skeleton-move_16.png");
  zombie1_imgF = loadAnimation("images/skeleton-attack_0.png","images/skeleton-attack_1.png","images/skeleton-attack_2.png","images/skeleton-attack_3.png","images/skeleton-attack_4.png","images/skeleton-attack_5.png","images/skeleton-attack_6.png","images/skeleton-attack_7.png","images/skeleton-attack_8.png");

  //zombie2_img = loadImage("images/skeleton-idle_0.png");
  zombie2_imgW =loadImage("images/ZombieWalk_normal_scaled_fast.gif");
  zombie2_imgF = loadAnimation("images/zombie gif blasting/phase1.gif", "images/zombie gif blasting/phase 2.png");
  
  boss_W = loadAnimation("images/Boss Zombie/walk1.png","images/Boss Zombie/walk2.png","images/Boss Zombie/walk3.png","images/Boss Zombie/walk4.png","images/Boss Zombie/walk5.png","images/Boss Zombie/walk6.png","images/Boss Zombie/walk7.png","images/Boss Zombie/walk8.png");
  boss_F - loadAnimation("images/Boss Zombie/hit1.png","images/Boss Zombie/hit2.png","images/Boss Zombie/hit3.png","images/Boss Zombie/hit4.png","images/Boss Zombie/hit5.png","images/Boss Zombie/hit6.png","images/Boss Zombie/hit7.png","images/Boss Zombie/hit8.png");


}

 
function setup() {
  canvas = createCanvas(displayWidth,displayHeight-257);
  
  engine = Engine.create();
  world = engine.world;
  
  game = new Game();
  game.start();

  gameState2 = 0;

  form = new Form;

  bullets = 15;

  zombie_hp1 = 10;
  zombie_hp2 = 10;
  zombie_hp3 = 10;
  zombie_hp4 = 10;

  zombie_d = 10;
  player_hp = 100;

  gameState = 0;

  if (gun === "shotgun"){
    magzineSize = 5;
  }
  if (gun === "ar"){
    magzineSize = 20;
  }
  if (gun === "Pistol"){
    magazineSize = 15;
  }

  bullets = magazineSize;

  ak47 = createSprite(400,displayHeight - 100);
  if (gameState3 === "ar"){
    ak47.addImage("unselected_a", unselected_a);
  }
  else{
    ak47.addImage("selected_a", selected_a);
  }


  pistol = createSprite(300,displayHeight - 100);
  if (gameState3 === "pistol"){
    ak47.addImage("unselected_h", unselected_h);
  }
  else{
    ak47.addImage("selected_h", selected_h);
  }


  shotgun = createSprite(500,displayHeight - 100);
  if (gameState3 === "shotgun"){
    ak47.addImage("unselected_s", unselected_s);
  }
  else{
    ak47.addImage("selected_s", selected_s);
  }


  Engine.run(engine);
}

function draw() {
  //if (backgroundImg)
  background("images/background.png");
  
  text("SCORE :"+score, displayWidth - 200, 100);

  //console.log(gameState);
  
  Engine.update(engine);

  //text()
  
  
  if (gameState===1){
    
   // gameState = 2;
    form.display();
 
    
    
  }

  if (gameState===2){
    background("images/background.png");
    form.hide();
    clear();
    game.play();
  }


  if (gameState === 0){
    //song.play();
    //background("images/background.png");  
    

    gameState = 1;

    //form.display();
    
  }

  drawSprites();
}

function isTouching(Object1,Object2){
  
  if (Object1.x - Object2.x < Object2.width/2 + Object1.width/2 && Object2.x - Object1.x < Object2.width/2 + Object1.width/2 && Object1.y - Object2.y < Object2.height/2 + Object1.height/2 && Object2.y - Object1.y < Object2.height/2 + Object1.height/2) {

    return true;
  }
  else{

    return false;

  }

}

function mousePressed(){
  if (gun === "pistol"){
    if (World.frameCount % 20 === 0 && bullets != 0){
      sound.play("images/45 ACP.mp3");
      bullets = bullets - 1;
      bullet = Injection(player.x,player.y);
      bullet.velocityX = mouse.x;
      bullet.velocityY = mouse.y;
      gameState2 = "shoot";
      injection_d = 10;
    }
  }
  if (gun === "shotgun"){
    if (World.frameCount % 30 === 0 && bullets != 0){
      sound.play("images/gauge.mp3");
      bullets = bullets - 1;
      bullet = Injection(player.x, player.y);
      bullet.velocityX = mouse.x;
      bullet.velocityY = mouse.y;
      gameState2 = "shoot";    
      injection_d = 30;
    }
  }
  if (gun === "ar"){
    if (World.frameCount % 5 === 0 && bullets != 0){
      sound.play("images/ar.mp3");
      bullets = bullets - 1;
      bullet = Injection(player.x, player.y);
      bullet.velocityX = mouse.x;
      bullet.velocityY = mouse.y;
      gameState2 = "shoot";
      injection_d = 10;
    }
  }


}

// function mouseClicked(){
//   bullets = bullets - 1;
// }

// function mousePressed(){
//   if (value = 0){
//     gameState === 1;
//   }
// }