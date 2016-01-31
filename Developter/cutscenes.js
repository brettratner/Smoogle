var duck = true;
var hintActive = false;
var bob = document.getElementById("repairman");
var d = [
	document.getElementById("d1"),
	document.getElementById("d2"),
	document.getElementById("d3"),
	document.getElementById("d4"),
	document.getElementById("d5"),
	document.getElementById("d6")];

var i = 0;
document.getElementById('introText').style.display = "none";

document.getElementById('video').addEventListener('ended',function(){
	//$("#video").fadeOut('1000');
	document.getElementById("video").style.display = 'none';
$("#story").animate({
	height: 300},
	1000, function() {
	d[i].style.display = 'inline-block';
	document.getElementById('introText').style.display = "block";
	
});

},false);



$("#next").click(function(event) {
			d[i].style.display = 'none';
			i++;
	if(i==5){
				document.getElementById("next").innerHTML = "Start";
			$("#button").animate({
				padding : '10px'},
				2000, function() {
						$("#button").animate({
							padding: '5px'},
							2000, function() {
				
				
			});

			});
		
		}
			if(i==6){
				buildup.play();
					$("#story").fadeOut(500);
					setTimeout(function(){
    buildup.pause();
    fart.play();

    fx('#titleOG');
	  
    setTimeout(function(){
        document.getElementById('h1').style.display = "none";


        $('#myCanvas').fadeIn(1000); 
        $("#hint").click(function(){
          	
        		
        		if(!hintActive){
          	checkStartEnd();
          }
 						


});

        bgSound.loop = true;
        setTimeout(function(){
            bgSound.play();
        } , 1000);
        
    }, 500);
},5000);
			}else{


			d[i].style.display = 'block';


}
});





function displayHint(index){
	hintActive = true;
    $("#helpBox").stop().fadeIn();
    document.getElementById("helpBox").style.display = 'block';
    $("#hint"+index).stop().fadeIn();
    document.getElementById("hint" + index).style.display = "block";
    setTimeout(function(){
        $("#helpBox").stop().fadeOut();
        document.getElementById("helpBox").style.display = 'none';
        document.getElementById("hint"+index).style.display = "none";

hintActive = false;
    }, 10000);
    
}



function checkStartEnd(){
    var foundError = false;

    if(arrElem[0].xpos < arrElem[1].xpos && arrElem[0].xpos < arrElem[2].xpos && arrElem[0].xpos < arrElem[3].xpos && arrElem[0].xpos < arrElem[4].xpos &&  arrElem[0].xpos <  arrElem[5].xpos){
		  if(arrElem[5].xpos > arrElem[1].xpos && arrElem[5].xpos > arrElem[2].xpos && arrElem[5].xpos > arrElem[3].xpos && arrElem[5].xpos > arrElem[4].xpos){

		    }else{
		       

		        displayHint(4);
		        foundError = true;
		       
		    }
    }else{
        displayHint(1);
        foundError = true;
        
    }

   


    if(foundError == false){


        if(duck){
            displayHint(2);
            duck= !duck;
        }
        else{
            displayHint(3);
             duck= !duck;
        }

    }
 
}
