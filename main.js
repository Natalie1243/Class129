song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
    song = loadSound("music.mp3");
}


function setup() {
canvas = createCanvas(600, 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}


function draw() {
image(video, 0, 0, 600, 500);
fill('#FF0000');
stroke('#FF0000');
circle(leftWristX, leftWristY, 25);
circle(rightWristX, rightWristY, 25);
InNumberleftWristY = Number(leftWristY);
remove_decimals = floor(InNumberleftWristY);
console.log(remove_decimals);
volume = remove_decimals/500;
console.log(volume);
song.setVolume(volume);
document.getElementById("volume").innerHTML = "Volume = " + volume;
}

function playmusic() {
song.play();
song.setVolume(1);
song.rate(1);
}

function stopmusic() {
    song.stop();
}

function modelLoaded() {
    console.log('PoseNet is intialized')
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX = "+ rightWristX+"rightWristY = "+ rightWristY);
}
}
