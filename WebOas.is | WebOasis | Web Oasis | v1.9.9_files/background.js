window.addEventListener('load',eventWindowLoaded,false);function eventWindowLoaded(){canvasApp();}
function canvasSupport(e){return!!e.getContext;}
function canvasApp(){var canvas=document.getElementById('myCanvas');if(!canvasSupport(myCanvas)){return;}
var ctx=canvas.getContext('2d');var w=canvas.width=window.innerWidth;var h=canvas.height=window.innerHeight;var yPositions=Array(300).join(0).split('');function runMatrix(){if(typeof Game_Interval!='undefined')clearInterval(Game_interval);Game_Interval=setInterval(drawScreen,45);}
function drawScreen(){ctx.fillStyle='rgba(0,0,0,.07)';ctx.fillRect(0,0,w,h);ctx.fillStyle='#0C85D3';ctx.font='10px Georgia';yPositions.map(function(y,index){text=String.fromCharCode(100+Math.random()*33);x=(index*10);ctx.fillText(text,x,y);if(y>100+Math.random()*30000){yPositions[index]=0;}else{yPositions[index]=y+10;}})}
runMatrix();}