var canvas = $('#myCanvas');/*document.getElementById("myCanvas");*/
var c = canvas[0].getContext("2d");



var path = 'code-01.png';
var path2 = 'code-02.png';
var path3 = 'code-03.png';
var path4 = 'code-04.png';
var path5 = 'code-05.png';
var path6 = 'code-06.png';
var path7 = 'code-07.png';
var image = new DragImage(path, 100, 100, 0);
var image2 = new DragImage(path2, 200, 100, 1);
var image3 = new DragImage(path3, 300, 100, 2);
var image4 = new DragImage(path4, 400, 100, 3);
var image5 = new DragImage(path5, 500, 100, 4);
var image6 = new DragImage(path6, 600, 100, 5);
var image7 = new DragImage(path7, 700, 100, 6);
//var image2 = new DragImage(path2, 200, 100);

var loop = setInterval(function() {

    c.fillStyle = "white";
    c.fillRect(0, 0, 1500, 750);

    image.update();
    image2.update();
    image3.update();
    image4.update();
    image5.update();
    image6.update();
     image7.update();

}, 30);

var mouseX = 0, mouseY = 0;
var mousePressed = false;
canvas.mousemove(function(e) {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
});
 
$(document).mousedown(function(){
    mousePressed = true;
}).mouseup(function(){
    mousePressed = false;
});

function DragImage(src, x, y, obj) {
    var that = this;
    var startX = 0, startY = 0;
    var drag = false;
    this.x = x;
    this.y = y;
    var img = new Image();

    img.src = src;

    this.update = function() {
        if (mousePressed){
            var left = that.x;
            var right = that.x + img.width;
            var top = that.y;
            var bottom = that.y + img.height;
            if (!drag){
              startX = mouseX - that.x;
              startY = mouseY - that.y;
            }
            if (mouseX < right && mouseX > left && mouseY < bottom && mouseY > top){
               drag = true;
            }
        }else{
           drag = false;
        }
        if (drag){
            that.x = mouseX - startX;
            that.y = mouseY - startY;
            arrElem[obj].xpos = that.x;
            arrElem[obj].ypos = that.y;

        }
       

         
      if(checkOrder(arrElem)){
        alert("YOU WIN BITCH");
      }
    

        c.drawImage(img, that.x, that.y);
     
    }
}



