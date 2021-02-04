var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "yellow"

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "pink";

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "blue";

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "purple"
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background(0,0,0);
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "yellow";
        music.play();
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "pink";
        ball.velocityX = 5;
        ball.velocityY =- 5;
        music.stop();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "blue";
        ball.velocityX = 5;
ball.velocityY = -5;
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        ball.velocityX = 5;
ball.velocityY = -5;
    }

    drawSprites();
}














