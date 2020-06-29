function ArrowDraw(self1,self2,self3,self4,chim,Banner,score){
    self1.layer.clearRect(0, 0, ScreenWidth, ScreenHeight)
    self1.drawFlyingArrow(self1,ArrowOneSpeed,ArrowOneStartX,ArrowOneMinY,ArrowOneMaxY)
    self2.drawFlyingArrow(self2,ArrowTwoSpeed,ArrowTwoStartX,ArrowTwoMinY,ArrowTwoMaxY)  
    self3.drawFlyingArrow(self3,ArrowThreeSpeed,ArrowThreeStartX,ArrowThreeMinY,ArrowThreeMaxY)
    self4.drawFlyingCoin(self4,CoinSpeed,CoinStartX,CoinMinY,CoinMaxY)
    self1.checkArrowCollision(self1,chim);  
    self2.checkArrowCollision(self2,chim);  
    self3.checkArrowCollision(self3,chim);
    self4.checkCoinCollision(self4,chim);
    scoreBoard.drawScore(score);
    if(isDead==true){
        deadScoreBoard(self1);
        return;
    }
    window.requestAnimationFrame(function() {ArrowDraw(self1,self2,self3,self4,chim,Banner,score)});
}

function WaitScreen(self1,self2,self3,self4,Banner,background){
    Banner.setPositionValue(0,80,ctxArrow,true)
    self1.layer.clearRect(0, 0, ScreenWidth, ScreenHeight)
    self1.drawFlyingArrow(self1,ArrowOneSpeed,ArrowOneStartX,ArrowOneMinY,ArrowOneMaxY)
    self2.drawFlyingArrow(self2,ArrowTwoSpeed,ArrowTwoStartX,ArrowTwoMinY,ArrowTwoMaxY)  
    self3.drawFlyingArrow(self3,ArrowThreeSpeed,ArrowThreeStartX,ArrowThreeMinY,ArrowThreeMaxY)
    self4.drawFlyingCoin(self4,CoinSpeed,CoinStartX,CoinMinY,CoinMaxY)
    Banner.StartBanner(Banner.self);
    if(isStarted==true){
        self1.layer.clearRect(0, 0, ScreenWidth, ScreenHeight)
        self1.x=ArrowAfterSpaceX
        self2.x=ArrowAfterSpaceX
        self3.x=ArrowAfterSpaceX
        self4.x=ArrowAfterSpaceX 
        return;
    }
    window.requestAnimationFrame(function() {WaitScreen(self1,self2,self3,self4,Banner)});
}
function turnToDead(){
    isDead=true;
    return 
}
function deadScoreBoard(self){
    self.layer.font="13px Tahoma";
    self.layer.fillStyle ="Black";
    self.layer.fillText("GAME OVER!! ", GameOverX, GameOverY ); 
    self.layer.fillText(" SCORE "+score, FinalScoreX, FinalScoreY ); 
    window.addEventListener("keypress",function replay(){
        location.reload()
    });
    return;
}