enemies = [];

function enemy() {
	
	//explode = function() {
	//	this.active = false;
	//};
  this.x = Math.random()* (CANVAS_WIDTH) -32;
  this.y = 0;


  this.draw = function() {
	  var context = myCanvas.getContext("2d");
	 var img = new Image ();
	 img.src = "./images/enemy.png";
	 context.drawImage(img,this.x,this.y,32,32);
   
  };
	this.direction = -1;
	this.length = -1;
  this.update = function() {
	if(this.direction == -1){
		this.direction=Math.floor(Math.random()*4);
		this.length = Math.floor(Math.random()*100);
		
	}
	else {
		switch(this.direction){
				case 0:
					this.y--; 
					break;
				case 1:	
					this.x++;
					break;
				case 2:
					this.y++;
					break;
				case 3:
					this.x--;
					break;
		}
		if(this.x < 0)
			this.direction = 1;
		if(this.y < 0)
			this.direction = 2;
		if(this.x > CANVAS_WIDTH -32)
			this.direction = 3;
		if(this.y > CANVAS_HEIGHT -32)
			this.direction = 0;
		this.length--;
		if(this.length <= 0)
			this.direction = -1;
	}
  };

  return this;
};

function calc(){
	if (enemies.length < 10){
		enemies.push(new enemy());	
		
	
	}
	for(i in enemies)enemies[i].update();
}

function drawenemies() {
  
for(i in enemies)enemies[i].draw();
  
  
};

