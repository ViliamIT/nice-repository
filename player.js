var player = {
	x:50,
	y:50,
	width:32,
	height:32,
};
	
player.draw = function(){
	var context = myCanvas.getContext("2d");
	 var img = new Image ();
	 img.src = "./images/player.png";
	 context.drawImage(img,this.x,this.y);
	 
	};
	
player.move = function() {
      if ((keys[37]) && (this.x > 0))
		 if (!bool_intersects(circle_x, circle_y, circle_r, this.x-5, this.y, player.width, player.height))   this.x -= 5;
      if ((keys[39]) && (this.x < CANVAS_WIDTH -32 ))
		 if (!bool_intersects(circle_x, circle_y, circle_r, this.x+5, this.y, player.width, player.height))    this.x += 5;
	
      if ((keys[38]) && (this.y > 0)) 
		 if (!bool_intersects(circle_x, circle_y, circle_r, this.x, this.y-5, player.width, player.height))      this.y -= 5;
      if ((keys[40]) && (this.y < CANVAS_HEIGHT -32)) 
		 if(!bool_intersects(circle_x, circle_y, circle_r, this.x, this.y+5, player.width, player.height))  this.y += 5;
	
    };