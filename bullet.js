function update() {
  if (keys[32]) {
    player.shoot();
	var sound = new Audio('./sounds/laser_sound_effect.mp3');
	//if (zvuk == 1)
	sound.play();
	//else if(zvuk == 0)
	//	sound.pause();
  }

  playerBullets.forEach(function(bullet) {
    bullet.update();
  });

  playerBullets = playerBullets.filter(function(bullet) {
    return bullet.active;
  });

  playerBullets.forEach(function(bullet) {
    bullet.draw();
  });
}

player.shoot = function() {
console.log("Pew pew");
};


function Bullet(I) {
  I.active = true;

  I.xVelocity = 0;
  I.yVelocity = -I.speed;
  I.width = 2;
  I.height = 5;
  I.color = "white";

  I.inBounds = function() {
    return I.x >= 0 && I.x <= CANVAS_WIDTH &&
      I.y >= 0 && I.y <= CANVAS_HEIGHT;
  };

  I.draw = function() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  I.update = function() {
    I.x += I.xVelocity;
    I.y += I.yVelocity;

    I.active = I.active && I.inBounds();
  };

  return I;
}
	
	
player.shoot = function() {
  var bulletPosition = this.midpoint();

  playerBullets.push(Bullet({
    speed: 5,
    x: bulletPosition.x,
    y: bulletPosition.y
  }));
};

player.midpoint = function() {
  return {
    x: this.x + this.width/2,
    y: this.y + this.height/2
  };
};	
function handleCollisions() {
  playerBullets.forEach(function(bullet) {
    enemies.forEach(function(enemy) {
      if (collides(bullet, enemy)) {
        enemy.explode();
        bullet.active = false;
      }
    });
  });
  enemies.forEach(function(enemy) {
    if (collides(enemy, player)) {
      enemy.explode();
      player.explode();
    }
  });
}