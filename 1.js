// Where is the circle
let x, y;
var xArray = [];
var yArray = [];
var bigArray = [];//气泡大小
var colorArray1 = [];
var colorArray2 = [];
var colorArray3 = [];
var circleNums = 100;//气泡数量
var img;
var gifEye;
var bigeye1;
var bigeye2;
var bigeyeArray = [];
var eyea;
var eyeb;
var eyec;
var eyed;
var baseEyefreq = 800;//眨眼睛的基础频率
var eyeArray = [];
var eyeAlphaArray = [];//眼睛的透明度
var miniNum = 0;
var maxNum = 1000;
var currentNum = 0;


function preload(){
  gifEye = loadImage("eye.gif");
  eyea = loadImage("eyea.svg");
  eyeb = loadImage("eyeb.svg");
  eyec = loadImage("eyec.svg");
  eyed = loadImage("eyed.svg");
  for(a=0;a<(baseEyefreq+25);a++){
    eyeArray[a] = eyea;
  }
  for(b = (baseEyefreq+25);b<(baseEyefreq+50);b++){
    eyeArray[b] = eyeb;
  }
  for(c = (baseEyefreq+50);c<(baseEyefreq+75);c++){
    eyeArray[c] = eyec;
  }
  for(d = (baseEyefreq+75);d<(baseEyefreq+100);d++){
    eyeArray[d] = eyed;
  }
}

function setup() {
  createCanvas(720, 400);
  frameRate(15);
  for(i=0;i<circleNums;i++){
    xArray[i] = random(10,700);
    yArray[i] = random(1,400);
    bigArray[i] = random(10,30);
    colorArray1[i] = random(200,220);
    colorArray2[i] = random(200,220);
    colorArray3[i] = random(200,220);
    eyeAlphaArray[i] = random(10,200);
  }
  x = width / 2;
  y = height;
}

function draw() {
  background(gifEye);
  
for(i=0;i<circleNums;i++){
  fill(colorArray1[i],colorArray2[i],colorArray3[i],60);
  //ellipse(xArray[i], yArray[i], bigArray[i], bigArray[i]);
  let x = randomNumber(0,(baseEyefreq+99));
  //console.info(x);
  image(eyeArray[x],xArray[i], yArray[i],bigArray[i], bigArray[i]);
  tint(255, eyeAlphaArray[i]); // 半透明
}

  for(j=0;j<circleNums;j++){
  // Jiggling randomly on the horizontal axis
    xArray[j] = xArray[j] + random(-1, 1);
    // Moving up at a constant speed
    yArray[j] = yArray[j] - random(1,7);
    // Reset to the bottom
    if (yArray[j] < 0) {
      yArray[j] = height;
    }
  }

  function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
  } 

  function getBigeye(randomNum){
    console.log(currentNum);
    currentNum = currentNum + randomNum;
    if(currentNum >= maxNum){
      currentNum = 0;
    }
    if(currentNum >= (maxNum/2)){
      return bigeye2;
    }else{
      return bigeye1;
    }
  }
}
