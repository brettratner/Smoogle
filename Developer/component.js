var canvas = $('#myCanvas');/*document.getElementById("myCanvas"); */
var canvas2 = document.getElementById("myCanvas");
var c = canvas[0].getContext("2d");

canvas2.width  = document.getElementById("body").offsetWidth;
canvas2.height = document.getElementById("body").offsetHeight;

 var winSound = new Audio('yaaaa.wav');
 var loseSound = new Audio("wahhwahh.wav");
  var pop = new Audio('pop.wav');
 var bloop = new Audio('blood.wav');
var explosion = new Audio('explosion.wav');
var rumble = new Audio('rumble.wav');
var fart = new Audio("fart.wav");
var buildup = new Audio("buildup.wav");
var bgSound = new Audio("bgSound.wav");

var path  = 'code-01.png';
var path2 = 'code-02.png';
var path3 = 'code-03.png';
var path4 = 'code-04.png';
var path5 = 'code-05.png';
var path6 = 'code-06.png';
var temp;

temp = RandomPosition();
console.log("x:" + temp[0] + " Y: "+ temp[1]);
var image  = new DragImage(path,  temp[0], temp[1], 0);
arrElem[0].xpos = temp[0];
arrElem[0].ypos = temp[1];


temp = RandomPosition();
var image2 = new DragImage(path2, temp[0], temp[1], 1);
arrElem[1].xpos = temp[0];
arrElem[1].ypos = temp[1];

temp = RandomPosition();
var image3 = new DragImage(path3, temp[0], temp[1], 2);
arrElem[2].xpos = temp[0];
arrElem[2].ypos = temp[1];

temp = RandomPosition();
var image4 = new DragImage(path4, temp[0], temp[1], 3);
arrElem[3].xpos = temp[0];
arrElem[3].ypos = temp[1];

temp = RandomPosition();
var image5 = new DragImage(path5, temp[0], temp[1], 4);
arrElem[4].xpos = temp[0];
arrElem[4].ypos = temp[1];

temp = RandomPosition();
var image6 = new DragImage(path6, temp[0], temp[1],5);
arrElem[5].xpos = temp[0];
arrElem[5].ypos = temp[1];

var center;
function RandomPosition(){
    var x;
    var y;
    var isValid = false;
    console.log("hit check");

    while(!isValid){

        x =(Math.random() * (canvas2.width - 300)+20);        
        y = (Math.random() * (canvas2.height - 60)+20);


        if(y > canvas2.height/4 + 500 && y < canvas2.height/4 + 99 + 500 &&  x > canvas2.width/2 - 160 - 500 && x < canvas2.width/2 + 160 + 500 ){


        }else{
            isValid = true;
        }
    }
    return [x,y]; 

    }

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
    pop.play();
        
}).mouseup(function(){
    mousePressed = false;
    pop.play();
     
});

function DragImage(src, x, y, obj) {
 var that = this;
/* canvas.click(function(that){
    console.log(this.drag);
    console.log(arrElem[0].drag);
this.drag =1;
console.log(this.drag);

}).mouseup(function() {
    this.drag = 0;
});*/

   
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
$(document).ready(function(){
   
  buildup.loop = true;

});





$("#button").click(function(){
    
    console.log(checkLogoArea(arrElem));
       if(checkOrder(arrElem)){
        
        bgSound.pause();
        winSound.play();
        document.getElementById("myCanvas").style.display = "none";
        document.getElementById('title2').style.display = "block";
        $("#title2").stop().delay(500).animate({
            fontSize: '150px'

        } ,500, function(){
                $("#title2").stop().animate({
            fontSize: '100px'
        });

        });
    
      }else{
        loseSound.play();
      }

});







