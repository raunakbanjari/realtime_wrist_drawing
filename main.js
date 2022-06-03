function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(500,400);
    canvas.position(650,110);

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    background('#05f7e3');
}

function modelLoaded(){
    console.log('poseNet is initialized')
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}