//Variables
var Trex, Trex_running;
var suelo, Suim;
//Cargamos archivos
function preload(){

    Trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
    Suim = loadImage("ground2.png");

}

//Generamos objetos /sprites
function setup(){

    createCanvas(600,200);
    
    Trex= createSprite(50,180,20,50);
    Trex.addAnimation("running",Trex_running);
    Trex.scale= 0.5;

    suelo = createSprite(200,180,400,20);
    suelo.addImage("suelo",Suim);
}

//Función principal - moviento al videojuego
function draw(){
    background(180);

    suelo.velocityX= -3;
    drawSprites();


}