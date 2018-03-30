// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KkyIDI6rQJI

// Purple Rain
// (138, 43, 226)
// (230, 230, 250) // background

var dropCount = 500;
var drops = [];
var rectangles = [];

var rainHue = 0;
var rainCol;
var bgCol;

var canvWidth = 640;
var canvHeight = 360;
var centerX = canvWidth/2;
var centerY = canvHeight/2;

var mouseHere;

function setup() {
  bgCol = color(230,230,250);
  colorMode(HSB,100);
  rainCol = color(rainHue,50,50);
  console.log(rainCol);
  
  canv = createCanvas(canvWidth, canvHeight);
  canv.mouseOver(mouseOn);
  canv.mouseOut(mouseOff);
  
  for (var i = 0; i < dropCount; i++) {
    drops[i] = new Drop();
  }
  floor = new Rectangle(centerX,canvHeight-5,canvWidth,10);
  box = new Rectangle(centerX, centerY, canvHeight/8, canvHeight/8);
  
  rectangles[0] = floor;
  rectangles[1] = box;
}

function draw() {
  colorMode(HSB,100);
  background(bgCol);
  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
	drops[i].fall();
  }
  if (drops.length < dropCount){
	  for (var i = drops.length; i < dropCount; i++){
		  drops[i] = new Drop();
	  }
  }
  floor.show();
  box.followMouse();
  box.show();
  
  rainHue += 0.5;
  if (rainHue > 100){
	  rainHue = 0;
	  //console.log("rainHue reset.")
  }
  rainCol = color(rainHue,100,75);
  //console.log(rainCol);
}

function mouseOn() {
	mouseHere = true;
}

function mouseOff() {
	mouseHere = false;
}