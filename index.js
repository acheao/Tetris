var c = document.getElementById("myCanvas");
var canvas = c.getContext("2d");
c.height = 600;
c.width = 400;
$("#tetris").width();
$("#tetris").height();
canvas.fillStyle="#BFBFBF";
for(var x=0;x<10;x++){
    for(var y=0;y<15;y++){
        canvas.fillRect(x*40,40*y,40,40);

    }
}
canvas.fillStyle="#FFFFFF";
for(var x1=0;x1<10;x1++){
    for(var y1=0;y1<15;y1++){
        canvas.fillRect(x1*40+5,y1*40+5,30,30);
    }
}
canvas.fillStyle="#BFBFBF";
for(var x2=0;x2<10;x2++){
    for(var y2=0;y2<15;y2++){
        canvas.fillRect(x2*40+10,y2*40+10,20,20);
    }
}
canvas.fillStyle="#4F4F4F";
canvas.fillRect(0,0,40,40);
canvas.fillRect(40,40,40,40);
canvas.fillRect(40,0,40,40);
canvas.fillRect(80,0,40,40);

canvas.fillStyle="#FFFFFF";
canvas.fillRect(5,5,30,30);
canvas.fillRect(45,5,30,30);
canvas.fillRect(85,5,30,30);
canvas.fillRect(45,45,30,30);


canvas.fillStyle="#4F4F4F";
canvas.fillRect(10,10,20,20);
canvas.fillRect(50,10,20,20);
canvas.fillRect(90,10,20,20);
canvas.fillRect(50,50,20,20);

function coordinate(x,y) {
    var coordinate = new Object;
    coordinate.x=x;
    coordinate.y=y;
    return coordinate;
}
var tes = coordinate(6,7);
//画黑色的方块drawing black Rect
function drawingBlackRect(point) {
    canvas.fillStyle="#4F4F4F";
    canvas.fillRect(point.x*40,point.y*40,40,40);
    canvas.fillStyle="#FFFFFF";
    canvas.fillRect(point.x*40+5,point.y*40+5,30,30);
    canvas.fillStyle="#4F4F4F";
    canvas.fillRect(point.x*40+10,point.y*40+10,20,20);

}
//画灰色的方块drawing grey Rect
function drawingGreyRect(point) {
    canvas.fillStyle="#BFBFBF";
    canvas.fillRect(point.x*40,point.y*40,40,40);
    canvas.fillStyle="#FFFFFF";
    canvas.fillRect(point.x*40+5,point.y*40+5,30,30);
    canvas.fillStyle="#BFBFBF";
    canvas.fillRect(point.x*40+10,point.y*40+10,20,20);

}
//以点A坐标为中心，顺时针转90度，返回该坐标
function rotate(origin,point) {
    var pointC = coordinate(point.x-origin.x,point.y-origin.y);
    var pointD = coordinate(-pointC.y,pointC.x);
    var returnPoint = coordinate(pointD.x+origin.x,pointD.y+origin.y);
     return returnPoint;
}

drawingGreyRect(tes);
drawingBlackRect(tes);



var testA = coordinate(5,10);
var testB = coordinate(6,10);
drawingBlackRect(testA);
drawingBlackRect(testB);
//画图形
var zShape = new Array();
var one = coordinate(5,0);
var two = coordinate(6,0);
var three = coordinate(7,0);
var four = coordinate(6,1);
zShape.push(one);
zShape.push(two);
zShape.push(three);
zShape.push(four);

for(var i=0;i<zShape.length;i++){
    drawingBlackRect(zShape[i]);
}


function rotateShape(shape,origin) {
    var shapeChange = new Array();

    for(var i in shape){
        drawingGreyRect(shape[i]);
    }
    for(var i in shape){
        var z = rotate(origin,shape[i]);
        drawingBlackRect(z);
        shapeChange.push(z);
    }
    return shapeChange;
}

$("#tst").click(function () {
    zShape = rotateShape(zShape,four);

});

