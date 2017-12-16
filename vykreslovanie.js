var background = new Image();
background.src = "./images/spaceimage.jpg";
background.onload = function(){
}
var keys = [];
var audio = new Audio('./sounds/star_wars.mp3');
//if (zvuk == 1)
audio.play();
//else if (zvuk == 0)
	//audio.pause();
var myCanvas = document.getElementById("myCanvas");

	this.myCanvas.style.height = window.innerHeight + "px";
var CANVAS_HEIGHT = this.myCanvas.height = window.innerHeight;
	this.myCanvas.style.width = window.innerWidth + "px";
var CANVAS_WIDTH = this.myCanvas.width = window.innerWidth;
	var ctx = myCanvas.getContext("2d");
    ctx.drawImage(background,0,0);
	
var circle_x = 325;
var circle_y = 400;
var circle_r = 140;

	draw_asteroid = function (){
	var c=document.getElementById("myCanvas");
ctx=c.getContext("2d");
ctx.beginPath();

ctx.arc(circle_x,circle_y,circle_r,0,2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

var pom = myCanvas.getContext("2d");
var asteroid_1 = new Image ();
var asteroid_2 = new Image ();
asteroid_1.src = "./images/asteroid_1.png";
asteroid_2.src = "./images/asteroid_2.png";
pom.drawImage(asteroid_1,125,200);
pom.drawImage(asteroid_2,800,400)
	}