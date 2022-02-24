leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;    

function preload() { 
song = loadSound("music.mp3");
song = loadSound("music2.mp3");
}

function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
    }

 function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);