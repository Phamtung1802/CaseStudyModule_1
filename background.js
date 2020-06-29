
function backgroundClass(width,height,baseImage,scrollSpeed){
  this.background=document.getElementById('BackgroundLayer'); 
  this.ctxBack=background.getContext('2d'); 
  this.width=width
  this.height=height
  this.img=new Image()
  this.self=this
  this.img.src=baseImage
  this.imgWidth = 800;
  this.scrollSpeed=scrollSpeed;

}
backgroundClass.prototype.running=function(self){
  self.img.ctxBack=self.ctxBack.drawImage(self.img,self.imgWidth, 0); 
  self.img.ctxBack.drawImage(self,imgWidth, 0); 
  if(imgWidth.width+imgWidth<800){ 
  self.img.ctxBack.drawImage(self.img,self.background.width+self.imgWidth,0); 
  }
  else {
    self.img.ctxBack.drawImage(self.img,-(self.background.width-self.imgWidth),0)
  }
  self.imgWidth -= self.scrollSpeed; 
  if (self.imgWidth == -self.background.width){
    self.imgWidth = 800; 
  }
  window.requestAnimationFrame(function() {running(self)});

}
// let background = document.getElementById('BackgroundLayer'); 
//  let ctxBack = background.getContext('2d'); 
//  background.width = 800; 
//  background.height = 600; 
//  let img = new Image(); 
//  img.src = "PixelArt.png"; 
//  let imgWidth = 800; 
//  let scrollSpeed = 4; 
//  function loopBack() { 
//  ctxBack.drawImage(img,imgWidth, 0); 
//  if(background.width+imgWidth<800){
//  ctxBack.drawImage(img,background.width+imgWidth,0); 
//  }
//  else {
//  ctxBack.drawImage(img,-(background.width-imgWidth),0)
//  }
//  imgWidth -= scrollSpeed; 
 
//  if (imgWidth == -background.width){
//      imgWidth = 800; 
//    }
//  window.requestAnimationFrame(loopBack);
//  } 
//  loopBack();

