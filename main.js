song1 = "";
song2 = "";
leftWrist = "";
rightWrist = "";
scoreLeftWrist = 0; 
scoreRightWrist = 0; 
function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet has been Initialized");
}
