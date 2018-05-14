var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
c.height = 600;
c.width = 400;
$("#tetris").width();
$("#tetris").height();
ctx.fillStyle="#BFBFBF";
for(var x=0;x<10;x++){
    for(var y=0;y<15;y++){
        ctx.fillRect(x*40,40*y,40,40);

    }
}
ctx.fillStyle="#FFFFFF";
for(var x1=0;x1<10;x1++){
    for(var y1=0;y1<15;y1++){
        ctx.fillRect(x1*40+5,y1*40+5,30,30);
    }
}
ctx.fillStyle="#BFBFBF";
for(var x2=0;x2<10;x2++){
    for(var y2=0;y2<15;y2++){
        ctx.fillRect(x2*40+10,y2*40+10,20,20);
    }
}

ctx.fillStyle="#4F4F4F";
ctx.fillRect(0,0,40,40);
ctx.fillRect(40,40,40,40);
ctx.fillRect(40,0,40,40);
ctx.fillRect(80,0,40,40);

ctx.fillStyle="#FFFFFF";
ctx.fillRect(5,5,30,30);
ctx.fillRect(45,5,30,30);
ctx.fillRect(85,5,30,30);
ctx.fillRect(45,45,30,30);


ctx.fillStyle="#4F4F4F";
ctx.fillRect(10,10,20,20);
ctx.fillRect(50,10,20,20);
ctx.fillRect(90,10,20,20);
ctx.fillRect(50,50,20,20);