function Rectangle(_x,_y,_w,_h) {
	this.x = _x;
	this.y = _y;
	this.w = _w;
	this.h = _h;
	
	this.followMouse = function() {
		if (mouseHere){
			this.x = mouseX;
			this.y = mouseY;
		} else {
			this.x -= (this.x - centerX)/20;
			this.y -= (this.y - centerY)/20;
		}
	}
	
	this.show = function() {
		noStroke();
		fill(0);
		rectMode(CENTER);
		rectMode(RADIUS);
		rect(this.x,this.y,this.w,this.h);
	}
}