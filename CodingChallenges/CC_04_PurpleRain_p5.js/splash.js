function Splash(_x,_y,_z) {
	this.x = _x
	this.y = _y
	this.time = 0
	
	this.show = function(){
		
	}
}

function dropSplash(drop){
	splash = new Splash(this.x, this.y);
	var index = drops.indexOf(drop);
	if (index > -1) {
		drops.splice(index, 1);
		drop = null;
	}
}