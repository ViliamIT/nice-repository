
	var playerBullets = [];
	var tick=0;
    //var zvuk=0;
	//////if (keys[77])
	//	zvuk = 1;
	
	 window.onload = function() {
		window.width;
		mainLoop();
    }
	
	
	
	function mainLoop() {
      button = document.getElementById("button");
      ctx = myCanvas.getContext("2d");
	  ctx.drawImage(background,0,0);
	  draw_asteroid();
      tick++;
      player.move();
      player.draw();
	  drawenemies();
	  calc();
	  update();
	  handleCollisions();
	  requestAnimationFrame(mainLoop);
    }
	
	window.onkeydown = function(event) {
      keys[event.keyCode] = true;
      console.log(keys);
    };
    window.onkeyup = function(event) {
      keys[event.keyCode] = false;
    };
	
	 
	
	
	function collides(a, b) {
  return a.x < b.x + b.width &&
         a.x + a.width > b.x &&
         a.y < b.y + b.height &&
         a.y + a.height > b.y;
}
	
	function bool_intersects(circle_x, circle_y, circle_r, player_x, player_y, player_width, player_height)
{
	circleDistance ={};
    circleDistance.x = Math.abs(circle_x - player_x);
    circleDistance.y = Math.abs(circle_y - player_y);

    if (circleDistance.x > (player_width/2 + circle_r)) { return false; }
    if (circleDistance.y > (player_height/2 + circle_r)) { return false; }

    if (circleDistance.x <= (player_width/2)) { return true; } 
    if (circleDistance.y <= (player_height/2)) { return true; }

    cornerDistance_sq = (circleDistance.x - player_width/2)^2 +
                         (circleDistance.y - player_height/2)^2;

    return (cornerDistance_sq <= (circle_r^2));
}


	