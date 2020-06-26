
 let background = document.getElementById('BackgroundLayer'); 
 let ctxBack = background.getContext('2d'); 
 background.width = 800; 
 background.height = 600; 
 let img = new Image(); 
 img.src = "PixelArt.png"; 
 let imgWidth = 800; 
 let scrollSpeed = 4; 
 function loopBack() { 
 ctxBack.drawImage(img,imgWidth, 0); 
 if(background.width+imgWidth<800){
 ctxBack.drawImage(img,background.width+imgWidth,0); 
 }
 else {
 ctxBack.drawImage(img,-(background.width-imgWidth),0)
 }
 imgWidth -= scrollSpeed; 
 
 if (imgWidth == -background.width){
     imgWidth = 800; 
   }
 window.requestAnimationFrame(loopBack);
 } 
 loopBack();

