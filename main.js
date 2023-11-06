noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 475);
    video.position(400,160)

    canvas = createCanvas(700, 500);
    canvas.position(1100,160);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
   if(results.length > 0){
    console.log(results)
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX + "noseY" + noseY);

    leftWristX = results[0].pose.leftWristX.x;
    rightWristX = results[0].pose.rightWristx;
    difference = floor(leftWristX - rightWristX);
    console.log("leftWristX = "+ leftWristX + "rightWristX = "+ rightWristX + "difference"+ difference);
   } 
}

function draw(){
    document.getElementById("square_side").innerHTML = "largura e altura serão = " + difference + "px";
   background('#969A97'); 
    fill('#F90093');
    stoke('#F90093');
    square(noseX, noseY, difference);
}