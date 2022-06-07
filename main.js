noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(500,400);
    canvas.position(650,140);

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    background('#05f7e3');

    document.getElementById("square_side").innerHTML = "The size of the square is " + difference;
    fill('#9c0202');
    stroke('#e607da');
    square(noseX , noseY , difference);
}

function modelLoaded(){
    console.log('poseNet is initialized')
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X = " + noseX + " and nose Y = " + noseY);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX-rightWristX);
        console.log("Left wrist X = " + leftWristX + " and right wrist X = " + rightWristX);
    }
}