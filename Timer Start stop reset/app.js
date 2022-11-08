window.onload = function () {


var tens = 00;
var seconds = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var buttonStart = document.getElementById("start-btn");
var buttonStop = document.getElementById("stop-btn");
var buttonReset = document.getElementById("reset-btn");
var interval;

buttonStart.onclick = function() {
    
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
       clearInterval(interval);
       
  }
  

  buttonReset.onclick = function() {
     clearInterval(interval);
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }
  
   
  
  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
  

}