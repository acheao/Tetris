var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
c.height = 900;
c.width = 600;
$("#tetris").width();
$("#tetris").height();
ctx.fillStyle="#BFBFBF";
/*ctx.fillRect(0,0,c.width/10,c.width/10);
ctx.fillRect(60,60,c.width/10,c.width/10);
ctx.fillRect(120,120,c.width/10,c.width/10);
ctx.fillRect(180,180,c.width/10,c.width/10);
ctx.fillRect(240,240,c.width/10,c.width/10);
ctx.fillRect(300,300,c.width/10,c.width/10);
ctx.fillRect(360,360,c.width/10,c.width/10);
ctx.fillRect(420,420,c.width/10,c.width/10);
ctx.fillRect(480,480,c.width/10,c.width/10);
ctx.fillRect(540,540,c.width/10,c.width/10);*/

for(var x=0;x<10;x++){
    for(var y=0;y<15;y++){
        ctx.fillRect(x*60,60*y,60,60);

    }
}
ctx.fillStyle="#FFFFFF";
for(var x1=0;x1<10;x1++){
    for(var y1=0;y1<15;y1++){
        ctx.fillRect(x1*60+5,y1*60+5,50,50);
    }
}
ctx.fillStyle="#BFBFBF";
for(var x2=0;x2<10;x2++){
    for(var y2=0;y2<15;y2++){
        ctx.fillRect(x2*60+10,y2*60+10,40,40);
    }
}
