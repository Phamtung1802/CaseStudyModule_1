let isStarted=false;
let isDead=false;
let background = document.getElementById('BackgroundLayer');  
let Mainlayer = document.getElementById('Mainlayer'); 
let ctxMain = Mainlayer.getContext('2d'); 
let ArrowLayer = document.getElementById('ArrowLayer'); 
let ctxArrow = ArrowLayer.getContext('2d'); 
let score=0;
let HighScore;
if(HighScore==null&&window.localStorage.getItem('highScore')!=null){
   HighScore=window.localStorage.getItem('highScore');
}
if(window.localStorage.getItem('highScore')==null){
   HighScore=0;
   window.localStorage.setItem('highScore', JSON.stringify(HighScore));
   console.log("highscore set =0")
}

function ImageObj(){
   this.bird=new Image();
   this.Arrow= new Image();
   this.coin=new Image(); 
   this.front=new Image()
   this.bird.src = "bird.png";
   this.Arrow.src = "arrow.png";
   this.coin.src="coin.png";
   this.front.src="Banner.png"
   this.self=this;
}

ImageObj.prototype.setPositionValue=function(x, y,layer,Dropping){
   this.x = x;
   this.y = y;
   this.layer=layer;
   this.Dropping=Dropping
   this.ToaDo=[this.x,this.y];
}

ImageObj.prototype.drop=function(self){
   if(self.y<GroundLevel){
       if(self.Dropping==true){
           self.layer.clearRect(0,0,ScreenWidth,ScreenHeight)
           self.layer.drawImage(self.bird,self.x,self.y+=droppingSpeed)
       }
       else {
           return;
       }
       self.ToaDo=[self.x,self.y];
   } 
   if(self.y>=GroundLevel){
       turnToDead();
       return;
   }
   if(isDead==true){
       turnToDead();
       return;
   }
   window.requestAnimationFrame(function() {self.drop(self)})
}

ImageObj.prototype.jumpBird=function(self){
   self.layer.clearRect(0, 0, ScreenWidth, ScreenHeight)
   if(self.Dropping==false){
   self.layer.drawImage(self.bird,self.x,self.y-=droppingSpeed)
   self.ToaDo=[self.x,self.y];
   }
   if(self.y<self.ToaDoNhay-JumpHeight){
       self.Dropping=true;
       self.drop(self);
       return;
   }
   if(self.y<TopBoundaryY){
       self.y=TopBoundaryY+1;
       self.Dropping=true;
       self.drop(self);
       return;
   }
   if(isDead==true){
       return;
   }
   window.requestAnimationFrame(function() {self.jumpBird(self)});
} 

ImageObj.prototype.drawFlyingArrow=function(self,num1,num2,num4,num5){
   self.layer.drawImage(self.Arrow,self.x-=num1,self.y)
   self.ToaDo=[self.x,self.y];
   if(self.x<num2){
       self.x=ArrowRestartX;
       self.y=randomInteger(num4,num5);  
   }
}

ImageObj.prototype.drawScore=function(self){
   self.layer.font="10px Tahoma";
   self.layer.fillStyle ="White";
   self.layer.fillText("score "+ score, ScoreX, ScoreY ); 

}

ImageObj.prototype.drawFlyingCoin=function(self,num1,num2,num4,num5,chim){
self.layer.drawImage(self.coin,self.x-=num1,self.y)
self.ToaDo=[self.x,self.y];
if(self.x<num2){
    self.x=CoinRestartX;
    self.y=randomInteger(num4,num5);    
   }  
}


ImageObj.prototype.StartBanner=function(self){
   self.layer.font="10px Tahoma";
   self.layer.fillStyle ="Black";
   self.layer.fillText("Press Space to Start ", PressSpaceToStartTextX, PressSpaceToStartTextY ); 
   self.layer.fillText("High Score "+window.localStorage.getItem('highScore'), HighScoreTextX, HighScoreTextY ); 
   self.layer.drawImage(self.front,BannerImagePosX,BannerImagePosY);
}

ImageObj.prototype.checkArrowCollision=function (arrow,chim){
   if((chim.ToaDo[0]+3>=arrow.ToaDo[0])&&(chim.ToaDo[0]-3<=arrow.ToaDo[0] )&&(chim.ToaDo[1]+2>=arrow.ToaDo[1])&&(chim.ToaDo[1]-4<=arrow.ToaDo[1])){
       if(score>=HighScore){
       HighScore=score;
       window.localStorage.setItem('highScore', JSON.stringify(HighScore));
       }
       turnToDead();
   }
}

ImageObj.prototype.checkCoinCollision=function (coin,chim){
if((chim.ToaDo[0]+3>=coin.ToaDo[0])&&(chim.ToaDo[0]-3<=coin.ToaDo[0] )&&(chim.ToaDo[1]+7>=coin.ToaDo[1])&&(chim.ToaDo[1]-7<=coin.ToaDo[1])){
   score++;
   coin.x=-JumpHeight;
   console.log(score) 
   return;
   }
}      

ImageObj.prototype.whenPressSpace=function(event,self){
   if(event.keyCode==32){
    if(isStarted==false){
        bird.setPositionValue(BirdStartX,BirdStartY,ctxMain,true);
        isStarted=true;
        ArrowDraw(Arrow,Arrow2,Arrow3,coin,bird,Banner,scoreBoard); 
    }
    self.ToaDoNhay=self.y;
    if(self.Dropping==true){
        self.Dropping=false;
        self.jumpBird(self);
    }   
    }
} 

function randomInteger(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function backgroundClass(width,height,baseImage,scrollSpeed){
this.background=document.getElementById('BackgroundLayer');
this.background.width=ScreenWidth;
this.background.height=ScreenHeight;  
this.width=width
this.height=height
this.img=new Image()
this.self=this
this.img.src=baseImage
this.imgWidth = ScreenWidth;
this.scrollSpeed=scrollSpeed;
}

backgroundClass.prototype.setPositionValueContext= function(){
   this.ctxBack=this.background.getContext('2d'); 
}

backgroundClass.prototype.running=function(self){
   self.ctxBack.drawImage(self.img,self.imgWidth, 0); 
   if(self.background .width+self.imgWidth<ScreenWidth){ 
   self.ctxBack.drawImage(self.img,self.background.width+self.imgWidth,0); 
   }
   else {
       self.ctxBack.drawImage(self.img,-(self.background.width-self.imgWidth),0)
   }
   self.imgWidth -= self.scrollSpeed; 
   if (self.imgWidth == -self.background.width){
       self.imgWidth = ScreenWidth; 
   }
   if(isDead==true){
       turnToDead();
       return;
   }
   window.requestAnimationFrame(function() {self.running(self)});
}