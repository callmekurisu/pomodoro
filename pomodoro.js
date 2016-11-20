$(document).ready(function() {
  
var count=59;
var setMin=1;
  
$("#plus").on("click", function(){
  setMin++;
  document.getElementById("timerMin").innerHTML=setMin + " min";
});
  
$("#minus").on("click", function(){
  if(setMin >= 1){
    setMin--;  
  }
  
  document.getElementById("timerMin").innerHTML=setMin + " min";
});
  
$("#start").on("click",function(){
  var counter=setInterval(timer, 1000);  
});
  
function timer()
{
  
  if(setMin == 0 && count == 1){
    $("#cdtMin").html("");
    $("#cdtSec").html("");
    count = 0;
    alert("TIME IS UP!");
  }
 
  if(setMin >= 0){
    count=count-1;  
  }
  
  if (count <= 0){
     count = 59;
     setMin--;
     document.getElementById("timerMin").innerHTML=setMin + " min"; 
  }
  
  document.getElementById("timer").innerHTML=count + " secs";
}
  
});
