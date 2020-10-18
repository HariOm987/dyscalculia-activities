var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

hour = Math.floor(Math.random() * 12);
second = Math.floor(Math.random() * 60);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius, hour, second);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius, myHour, myMinute){
    //var now = new Date();
    //var hour = now.getHours();
    //var minute = now.getMinutes();
    //var second = now.getSeconds();
    var hour = myHour;
    var minute = myMinute;    

    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);    
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}



minimum = 10000;
maximum = 99999;
var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
document.querySelector('#numbers').innerHTML = randomnumber;


function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 

function prob1() {
  //var x = document.getElementById("oops");
  document.querySelector('#butt1').innerHTML = hour + ': ' + second;
  /*
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  */
}

function prob2() {
  document.querySelector('#butt2').innerHTML = reverseString(randomnumber.toString());
}

function prob3() {
  document.querySelector('#butt3').innerHTML = "3156";
}

function prob4() {
  document.querySelector('#butt4').innerHTML = "99 (ninety-nine)";
}


function countDown(sec, elem) {
  document.getElementById("sevenPhoto").style.display = "block";

  var element = document.getElementById(elem);
  element.innerHTML = "Time left: " + sec + " seconds";
    if (sec < 1) {
      clearTimeout(timer); //clear timeout
      element.innerHTML = 'Time is up!';
      document.getElementById("sevenPhoto").style.display = "none";
    }
    sec--;
    var timer = setTimeout('countDown(' + sec + ', "' + elem + '")', 1000);
}

function prob5() {
  document.querySelector('#butt5').innerHTML = "7";
}

function prob6() {
  document.querySelector('#butt6').innerHTML = "";
}
