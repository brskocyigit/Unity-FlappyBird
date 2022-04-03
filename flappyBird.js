var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


// some variables

var gap = 75;
var constant = pipeNorth.height+gap;

// load images

var bird = Image();
var bg = Image();
var fg = Image();
var pipeNorth = Image();
var pipeSouth = Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";

//draw images

draw();

function draw(){
    
    ctx.drawImage(bg,0,0);

    ctx.drawImage(pipeNorth,100,0);
    ctx.drawImage(pipeSouth,100,0+constant0);
    
}

