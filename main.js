song = "";
rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload()
{
	song1 = loadSound("TS-song.mp3.mp3");
    song2 = loadSound("JB-song.mp3.mp3");
}

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	console.log(results)
	scoreLeftWrist =  results[0].pose.keypoints[9].score;
	console.log(" scoreLeftWrist = " + scoreLeftWrist);
	
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
		
  }
}

function draw() {
	image(video, 0, 0, 500, 170);

    fill("#FF0000");
    stroke("#FF0000")   

	if(scoreLeftWrist > 0.2)
    {
		circle(leftWristX,leftWristY,20);
		
		if(song1 = false)
        {
			play(song1)
			heading("You Belong With Me")
		}
	}
}

function play()
{
	song.play();
	song.setVolume(1);
	song.rate(1);
}