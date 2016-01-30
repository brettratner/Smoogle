var canvas = $('#myCanvas');/*document.getElementById("myCanvas"); */
var canvas2 = document.getElementById("myCanvas");
var c = canvas[0].getContext("2d");

canvas2.width  = document.getElementById("body").offsetWidth;
canvas2.height = document.getElementById("body").offsetHeight;

var path  = 'code-01.png';
var path2 = 'code-02.png';
var path3 = 'code-03.png';
var path4 = 'code-04.png';
var path5 = 'code-05.png';
var path6 = 'code-06.png';
var image  = new DragImage(path,  (Math.random() * (canvas2.width - 60)+20), (Math.random() * (canvas2.height - 40)+20), 0);
var image2 = new DragImage(path2, (Math.random() * (canvas2.width - 110)+20), (Math.random() * (canvas2.height - 40)+20), 1);
var image3 = new DragImage(path3, (Math.random() * (canvas2.width - 110)+20), (Math.random() * (canvas2.height - 40)+20), 2);
var image4 = new DragImage(path4, (Math.random() * (canvas2.width - 60)+20), (Math.random() * (canvas2.height - 40)+20), 3);
var image5 = new DragImage(path5, (Math.random() * (canvas2.width - 325)+20), (Math.random() * (canvas2.height - 40)+20), 4);
var image6 = new DragImage(path6, (Math.random() * (canvas2.width - 80)+20), (Math.random() * (canvas2.height - 40)+20), 5);
//var image2 = new DragImage(path2, 200, 100);

var loop = setInterval(function() {

    c.fillStyle = "white";
    c.fillRect(0, 0, canvas2.width, canvas2.height);

    image.update();
    image2.update();
    image3.update();
    image4.update();
    image5.update();
    image6.update();

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
       

         
   
    

        c.drawImage(img, that.x, that.y);
     
    }
}



setTimeout(function(){
    fx('#titleOG');
    setTimeout(function(){
        document.getElementById('h1').style.display = "none";


        $('#myCanvas').fadeIn(1000);
    }, 500);
},5000);


$("#button").click(function(){
    console.log("hi");
       if(checkOrder(arrElem)){
        document.getElementById("myCanvas").style.display = "none";
        // document.getElementById("h1").style.display = "block";
       // document.getElementById('title2').style.display = "block";
       $("#title2").animate(function(){
        'fontsize' : '120px'


       } 1000, function(){
            'fontsize' : '100px'

       });

      }

});
