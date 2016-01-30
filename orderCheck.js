var canvas = document.getElementsByTagName('canvas')[0];
var logo = document.getElementById("logo");

var arrElem = [
	{
		xpos : 0,
		ypos : 0
	},
	{
		xpos : 0,
		ypos: 0

	},
	{
		xpos : 0,
		ypos : 0
	},
	{
		xpos : 0,
		ypos : 0
	},
	{
		xpos: 0,
		ypos: 0
	},
	{
		xpos : 0,
		ypos : 0
	}
];



function checkLogoArea(arrayOfElements){
	var inArea = false;
	for(var i = 0; i<arrayOfElements.length-1; i++){
			if(arrayOfElements[i].xpos < ((canvas.width)/2 + 250) && arrayOfElements[i].xpos > ((canvas.width)/2-250) 
				){


			}else{
				return false;
			}
	}
	return true;
}
/*
&&  arrayOfElements[i].ypos > (canvas.height/2 - 100)  
				&& arrayOfElements[i].ypos < (canvas.height/2 + 100)*/


function checkOrder(arrayOfElements){

	if(arrElem[0].xpos < arrElem[1].xpos && arrElem[1].xpos < arrElem[2].xpos && arrElem[2].xpos < arrElem[3].xpos && arrElem[3].xpos < arrElem[4].xpos &&  arrElem[4].xpos <  arrElem[5].xpos  )
		{
			return true;
		}
		return false;
	/*
	100
	182
	206
	100
	593
	121
*/

}





function fx(o) {
  var $o = $(o);

  $o.html($o.text().replace(/([\S])/g, "<span>$1</span>"));
  $o.css("position", "relative");
  $("span", $o).each(function(i) {
    var newTop = Math.floor(Math.random()*500)*((i%2)?1:-1);
    var newLeft = Math.floor(Math.random()*500)*((i%2)?1:-1);

    $(this).css({position: "relative",
      opacity: 1,
      fontSize: 12,
      top: 0,
      left: 0
    }).animate({
      opacity: 0,
      fontSize: 84,
      top: newTop,
      left:newLeft
    },1000);
  });



}



