function setup() { 
    canvas = createCanvas(550, 550);
    canvas.position(500,170);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.lenght > 0)
  {
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX +"leftWristY =" +leftWristY); 

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX +"rightWristY =" +rightWristY); 
  }
}

function draw() {
    background('#0b0026');
      fill('#00FFFF');
      stroke('#00FFFF');
    }