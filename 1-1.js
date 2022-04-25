// Where is the circle
let x, y;
let canvasWidth = 1280;
let canvasHeight = 560;
var xArray = [];
var yArray = [];
var bigArray = [];//气泡大小
var colorArray1 = [];
var colorArray2 = [];
var colorArray3 = [];
var circleNums = 50;//气泡数量
var bigeye1;
var bigeye2;
var bigeyeArray = [];
var eyea;
var eyeb;
var eyec;
var eyed;
var baseEyefreq = 800;//眨眼睛的基础频率
var bigEyeChange = 50;//大眼球转动频率
var eyeArray = [];
var eyeAlphaArray = [];//眼睛的透明度
var miniNum = 0;
var maxNum = 1000;
var currentNum = 0;


function preload(){
	bigeye1 = loadImage("bigeye1.svg");
  bigeye2 = loadImage("bigeye2.svg");
  for(let am = 0;am<50000;am++){
    bigeyeArray[am] = bigeye1;
  }
  for(let bm = 50000;bm<100000;bm++){
    bigeyeArray[bm] = bigeye2;
  }
  eyea = loadImage("eyea.svg");
  eyeb = loadImage("eyeb.svg");
  eyec = loadImage("eyec.svg");
  eyed = loadImage("eyed.svg");
  for(a=0;a<(baseEyefreq+125);a++){
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
  createCanvas(canvasWidth, canvasHeight);
  frameRate(15);
  // Starts in the middle
  for(i=0;i<circleNums;i++){
    xArray[i] = random(20,canvasWidth-20);
    yArray[i] = random(1,canvasHeight);
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
  background(0);
  imageMode(CENTER);
  image(getBigeye(random(bigEyeChange)), canvasWidth/2, canvasHeight/2);
  for(i=0;i<circleNums;i++){
    //ellipse(xArray[i], yArray[i], bigArray[i], bigArray[i]);
    let x = randomNumber(0,(baseEyefreq+99));
    //console.info(x);
    image(eyeArray[x],xArray[i], yArray[i],bigArray[i], bigArray[i]);
    tint(255, eyeAlphaArray[i]); // 半透明

    xArray[i] = xArray[i] + random(-1, 1);
    // Moving up at a constant speed
    yArray[i] = yArray[i] - random(1,7);
    // Reset to the bottom
    if (yArray[i] < 0) {
      yArray[i] = height;
    }
  }



  function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
  } 

  function getBigeye(randomNum){
    //console.log(currentNum);
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
