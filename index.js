var c = document.getElementById("myCanvas");
var canvas = c.getContext("2d");
c.height = 600;
c.width = 400;
$("#tetris").width();
$("#tetris").height();
drawingBackgroud();

$("#tst").click(function () {
    zShape = rotateShape(two,zShape);
    var fdf = retateAntiClockWise(test,tes1);
    drawingBlackRect(fdf);

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