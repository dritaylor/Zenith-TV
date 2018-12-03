function start(){
	zLogo();
	endVideo();
}
var video = document.getElementById('video');
var source = document.createElement('source');
var globalR=0;
$('#rotateable').draggable({
  handle: '#rotate',
  opacity: 0.001,
  helper: 'clone',
  drag: function(event) {
    var // get center of div to rotate
      pw = document.getElementById('rotateable'),
      pwBox = pw.getBoundingClientRect(),
      center_x = (pwBox.left + pwBox.right) / 2,
      center_y = (pwBox.top + pwBox.bottom) / 2,
      // get mouse position
      mouse_x = event.pageX,
      mouse_y = event.pageY,
      radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
      degree = Math.round((radians * (180 / Math.PI) * -1) + 100);

    var rotateCSS = 'rotate(' + (degree + 170) + 'deg)';
	globalR=degree+170;
    $('#rotateable').css({
      '-moz-transform': rotateCSS,
      '-webkit-transform': rotateCSS
    });	
  }
});

document.getElementById("body").addEventListener("mouseup", function(){ 
globalR=parseInt(globalR,10);
//iStatic(); time based static

if (globalR > 90 && globalR < 150) {
    source.setAttribute('src', 'videos/vs1.mp4');
	video.appendChild(source);
	video.play();
} else if (globalR > 150 && globalR < 210) {
    source.setAttribute('src', 'videos/vs2.mp4');
	video.appendChild(source);
	video.play();
	} else if (globalR > 210 && globalR < 270) {
    source.setAttribute('src', 'videos/vs3.mp4');
	video.appendChild(source);
	video.play();
} else if (globalR > 270 && globalR < 330) {
    source.setAttribute('src', 'videos/vs4.mp4');
	video.appendChild(source);
	video.play();
} else if (globalR < 330 && globalR < 390) {
    source.setAttribute('src', 'videos/vs5.mp4');
	video.appendChild(source);
	video.play();
} else {
    source.setAttribute('src', 'videos/vs6.mp4');
	video.appendChild(source);
	video.play();
}

 });
	  
	function unloadVideo (){
		var videoElement = document.getElementById('video');
		videoElement.pause();
		videoElement.removeAttribute('src'); // empty source
		videoElement.load();
	  
	  }
	  
	  function test(){
		  var vid=document.getElementById("video");
		  var videoElement = document.getElementById('video');
			videoElement.pause();
			videoElement.removeAttribute('src'); // empty source
			videoElement.load();
		 // vid.pause();
		
	  }
	  
function zLogo(){
var elem = document.createElement("img");
elem.setAttribute("src", "img/zenith-logo.png");	  
elem.src="img/zenith-logo.png";
elem.style.height='300px';
elem.style.width='500px';
document.getElementById("footer_display").appendChild(elem);	  
}     
function iStatic(){
 setStatic();
		 var startTime = new Date().getTime();
var interval = setInterval(function(){
    if(new Date().getTime() - startTime > 120000){
        clearInterval(interval);
        return;
    }
    //do whatever here..
	clearStatic();
}, 2000); 	
}
function setStatic(){
 var element = document.getElementById("footer_display");
 element.classList.add("static-motion");
}
function clearStatic(){
 var element = document.getElementById("footer_display");
 element.classList.remove("static-motion");
}
var myVar = setInterval(setColor, 500);

function setColor() {
     var element = document.getElementById("footer_display");
 element.classList.add("static-motion");
}

function stopColor() {
    clearInterval(myVar);
}
function endVideo(){
	//var element = document.getElementById("footer_display");
}