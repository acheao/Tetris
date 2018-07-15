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


var Lshape = produceShape(coordinate(3,0));

/*for(var i=0;i<zShape.length;i++){
    drawingBlackRect(zShape[i]);

}*/


for(var i=0;i<Lshape.shape.length;i++){
    drawingBlackRect(Lshape.shape[i]);
}


$(document).keyup(function (event) {
    switch (event.keyCode){
        case 32:
            changeShape(Lshape);
            break;
        case 37:
            moveRect(Lshape,"left");
            break;
        case 38:
            moveRect(Lshape,"up");
            break;
        case 39:
            moveRect(Lshape,"right");
            break;
        case 40:
            moveRect(Lshape,"down");
            break;
    }
})



/*var i = 0;
var shapeobject = produceShape(coordinate(3,0));
var c = setInterval(function () {
    i = i+1;


    moveRect(shapeobject.shape,"down",shapeobject.origin);
    if(i == 13){
        clearInterval(c);
    }

},1000);*/

/*$(document).keyup(function(event){
    switch(event.keyCode) {
        case 37:
            moveRect(shapeobject.shape,"left",shapeobject.origin);
            return;
        case 39:
            moveRect(shapeobject.shape,"right",shapeobject.origin);
            return;
        case 38:
            moveRect(shapeobject.shape,"up",shapeobject.origin);
            return;
        case 40:
            moveRect(shapeobject.shape,"down",shapeobject.origin);
            return;
        case 32:

            shapeobject.shape = changeShape(shapeobject.type,shapeobject.origin,shapeobject.shape);
            // shapeobject.shape = rotateShape(shapeobject.shape[shapeobject.origin],shapeobject.shape);
            return;
    }

});*/
