// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KkyIDI6rQJI


function Drop() {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 20, 1, 20);
  

  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;
	if (this.y > 1.5 * canvHeight){
		//console.log('Off Screen');
		this.y = random(-200, -100);
		this.yspeed = map(this.z, 0, 20, 4, 10)
	}
	for (var i = 0; i < rectangles.length; i++) {
		
		if (this.collided(rectangles[i])){
			dropSplash(this);
		}
	}
  }
  
  this.collided = function(block) {
	// If in the correct x-range
	if (this.x < block.x + block.w && this.x > block.x - block.w){
		// If in the correct y-range
		if (this.y < block.y + block.h && this.y > block.y - block.h){
			return true;
		}
	}
	return false
  }

  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(rainCol);
    line(this.x, this.y, this.x, this.y+this.len);
  }
}
