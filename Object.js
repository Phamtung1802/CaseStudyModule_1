 //make a place to hold all image
 let ImageObjStorage=function(){
    this.background = new Image();
    this.bird=new Image();
    this.bullet= new Image();
    this.background.src = "PixelArt.png";
    this.bird.src = "bird.png";
    this.bullet.src = "bullet.png";
 }
 function Drawable() {
    this.init = function(x, y, width, height) {
		// Defualt variables
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
}