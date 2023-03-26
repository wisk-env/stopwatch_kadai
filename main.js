$(document).ready(function(){
  $(".start-button").click(function(){
    $(this).prop("disabled", true)
    $(".stop-button, .reset-button").prop("disabled", false)
  });
  
  $(".stop-button").click(function(){
    $(".start-button").prop("disabled", false)
    $(this).prop("disabled", true)
  });
  
  $(".reset-button").click(function() {
    $(".reset-button, .stop-button").prop("disabled", true)
    $(".start-button").prop("disabled", false)
    $(".reset-number").text("00:00:00:00")
  })
});

let time = 0;
let hour = 0;
let min = 0;
let sec = 0;
let miliSec = 0;
 
function startCountEvent() {
  time = setInterval("countUp()", 100);
}

function countUp() {
  miliSec ++;
  if (miliSec == 10) {
    miliSec = 0;
    sec++;
  } else if (sec == 60) {
    sec = 0;
    min++;
  } else if (min == 60) {
    min = 0;
    hour++;
  }

  const hourStr = hour.toString().padStart(2, '0');
  const minStr = min.toString().padStart(2, '0');
  const secStr = sec.toString().padStart(2, '0');
  const miliSecStr = miliSec.toString().padStart(2, '0');

  document.getElementById('stop-watch').innerHTML = hourStr + ":" + minStr + ":" + secStr + ":" + miliSecStr;
}

function stopCountEvent() {
  clearInterval(time);
}

function resetCountEvent() {
  clearInterval(time);
  hour = 0;
  min = 0;
  sec = 0;
  miliSec = 0;
}
