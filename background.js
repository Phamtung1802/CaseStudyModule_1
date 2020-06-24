 // inside main_javascript.js 
 let background = document.getElementById('BackgroundLayer'); 
 // The 2D Context for the HTML background element. It 
 // provides objects, methods, and properties to draw and 
 // manipulate graphics on a background drawing surface. 
 let ctxBack = background.getContext('2d'); 
 // background width and height 
 background.width = 800; 
 background.height = 600; 
 // create an image element 
 let img = new Image(); 
 // specify the image source relative to the html or js file 
 // when the image is in the same directory as the file 
 // only the file name is required: 
 img.src = "PixelArt.png"; 
 // window.onload is an event that occurs when all the assets 
 // have been succesfuly loaded( in this case only the spacebg.png) 
 // the initial image width 
 let imgWidth = 800; 
 // the scroll speed 
 // an important thing to ensure here is that can.height 
 // is divisible by scrollSpeed 
 let scrollSpeed = 5; 
 // this is the primary animation loop that is called 60 times 
 // per second 
 function loopBack() { 
 // draw image 1 
 ctxBack.drawImage(img,imgWidth, 0); 
 // draw image 2 
 if(background.width+imgWidth<800){
 ctxBack.drawImage(img,background.width+imgWidth,0); 
 }
 else {
 ctxBack.drawImage(img,-(background.width-imgWidth),0)
 }


 // update image Width 
 imgWidth -= scrollSpeed; 

 // reseting the images when the first image entirely exits the screen 
 if (imgWidth == -background.width) 
     imgWidth = 800; 
 // this function creates a 60fps animation by scheduling a 
 // loop function call before the 
 // next redraw every time it is called 
 } 
 // this initiates the animation by calling the loop function 
 // for the first time
 window.setInterval(loopBack,125);