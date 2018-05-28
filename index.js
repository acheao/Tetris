var c = document.getElementById("myCanvas");
var canvas = c.getContext("2d");
c.height = 600;
c.width = 400;
$("#tetris").width();
$("#tetris").height();
drawingBackgroud();

var blackRectArea = new Array();
var moveRectArea = new Array();

$("#tst").click(function () {
    zShape = rotateShape(zShape[1],zShape);
});

//画图形 drawing shape
var zShape = new Array();
var one = coordinate(3,0);
var two = coordinate(4,0);
var three = coordinate(5,0);
var four = coordinate(4,1);
zShape.push(one);
zShape.push(two);
zShape.push(three);
zShape.push(four);

for(var i=0;i<zShape.length;i++){
    drawingBlackRect(zShape[i]);
}


var i = 0;
var c = setInterval(function () {
    i = i+1;

    moveRect(zShape,"down");
    if(i == 13){
        clearInterval(c);
    }

},1000);

$(document).keyup(function(event){
    switch(event.keyCode) {
        case 37:
            moveRect(zShape,"left");
            return;
        case 39:
            moveRect(zShape,"right");
            return;
        case 38:
            moveRect(zShape,"up");
            return;
        case 40:
            moveRect(zShape,"down");
            return;
        case 32:
            zShape = rotateShape(zShape[1],zShape);
            return;
    }

});

var point = coordinate(3,0);
produceShape(point);
