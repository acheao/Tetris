var c = document.getElementById("myCanvas");
var canvas = c.getContext("2d");
c.height = 600;
c.width = 400;
$("#tetris").width();
$("#tetris").height();
drawingBackgroud();

var blackRectArea = new Array();


var moveRectArea = produceShape(coordinate(3,-1));

/*var Lshape = produceShape(coordinate(3,0));*/

/*for(var i=0;i<zShape.length;i++){
    drawingBlackRect(zShape[i]);

}*/


/*for(var i=0;i<Lshape.shape.length;i++){
    drawingBlackRect(Lshape.shape[i]);
}*/


$(document).keyup(function (event) {
    switch (event.keyCode){
        case 32:
            if(checkBoundary(moveRectArea)){
                changeShape(moveRectArea);
            }
            break;
        case 37:
            moveRect(moveRectArea,"left");
            break;
        case 38:
            moveRect(moveRectArea,"up");
            break;
        case 39:
            moveRect(moveRectArea,"right");
            break;
        case 40:
            if(checkBoundary(moveRectArea)){
                moveRect(moveRectArea,"down");
            }
            break;
    }
})



var i = 0;
var Timer = setInterval(function () {
    i = i+1;

    debugger;
    moveRect(moveRectArea,"down");
    if(!checkBoundary(moveRectArea)){
        clearInterval(Timer);
    }

},1000);

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
