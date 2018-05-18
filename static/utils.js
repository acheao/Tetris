var horizontalNum = 10;
var verticalNum = 15;

// 画背景图
// drawing background
function drawingBackgroud() {
    canvas.fillStyle="#BFBFBF";
    for(var x=0;x<horizontalNum;x++){
        for(var y=0;y<verticalNum;y++){
            canvas.fillRect(x*40,40*y,40,40);

        }
    }
    canvas.fillStyle="#FFFFFF";
    for(var x1=0;x1<horizontalNum;x1++){
        for(var y1=0;y1<verticalNum;y1++){
            canvas.fillRect(x1*40+5,y1*40+5,30,30);
        }
    }
    canvas.fillStyle="#BFBFBF";
    for(var x2=0;x2<horizontalNum;x2++){
        for(var y2=0;y2<verticalNum;y2++){
            canvas.fillRect(x2*40+10,y2*40+10,20,20);
        }
    }
}


// 创建点坐标对象
// create coordinate
function coordinate(x,y) {
    var coordinate = new Object;
    coordinate.x=x;
    coordinate.y=y;
    return coordinate;
}

// 画黑色的方块
// drawing black Rect
function drawingBlackRect(point) {
    canvas.fillStyle="#4F4F4F";
    canvas.fillRect(point.x*40,point.y*40,40,40);
    canvas.fillStyle="#FFFFFF";
    canvas.fillRect(point.x*40+5,point.y*40+5,30,30);
    canvas.fillStyle="#4F4F4F";
    canvas.fillRect(point.x*40+10,point.y*40+10,20,20);

}


// 画黑色图形
// drawing shape
function drawingBLackShape(shape) {
    for(var i in shape){
        drawingBlackRect(shape[i]);
    }
}


// 画灰色的方块
// drawing grey Rect
function drawingGreyRect(point) {
    canvas.fillStyle="#BFBFBF";
    canvas.fillRect(point.x*40,point.y*40,40,40);
    canvas.fillStyle="#FFFFFF";
    canvas.fillRect(point.x*40+5,point.y*40+5,30,30);
    canvas.fillStyle="#BFBFBF";
    canvas.fillRect(point.x*40+10,point.y*40+10,20,20);

}

// 画灰色图形
// drawing grey shape
function drawingGreyShape(shape) {
    for(var  i in shape){
        drawingGreyRect(shape[i]);
    }
}

