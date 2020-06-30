let Arrow=new ImageObj(); 
let Arrow2=new ImageObj(); 
let Arrow3=new ImageObj();
let Banner= new ImageObj();
let coin= new ImageObj();
let bird= new ImageObj();
let scoreBoard= new ImageObj();
let BlueSkyBG=new backgroundClass(ScreenWidth,ScreenHeight,"PixelArt.png",BgSpeed)
Arrow.setPositionValue(0,0,ctxArrow,true);
Arrow2.setPositionValue(0,0,ctxArrow,true);
Arrow3.setPositionValue(0,0,ctxArrow,true);
coin.setPositionValue(0,0,ctxArrow,true);
scoreBoard.setPositionValue(0,0,ctxArrow,true);
BlueSkyBG.setPositionValueContext();
BlueSkyBG.running(BlueSkyBG);
WaitScreen(Arrow,Arrow2,Arrow3,coin,Banner);
window.addEventListener("keypress",function(event) {bird.whenPressSpace(event,bird)
console.log(event.keyCode)})