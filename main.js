headX = null;
headY = null;

function preload(){
    loadImage = loadImage("https://i.postimg.cc/q7NTygpb/Diamond-Helmet.png")
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide;

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(loadImage, headX, headY, 30, 30);
}

function takeSnapshot(){
    save('diamond helmet picture');
}

function modelLoaded(){
    console.log("posenet has been set up");
}

function gotPoses(){
    if(results.length > 0){
        console.log(results);
        headX = results[0].pose.nose.x;
        headY = results[0].pose.nose.y + 10;
        console.log("head x =" + results[0].pose.nose.x);
        console.log("head y =" + results[0].pose.nose.y + 10);
    }
}
