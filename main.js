noseX=0;
noseY=0;

function preload() {
  clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
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
    noseX=results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
    console.log("nose x =" + noseX);
    console.log("mose y = " + noseY)

    console.log(results);
    console.log("noseX = " + results[0].pose.nose.x)
    console.log("noseY = " + results[0].pose.nose.yy)
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  Fill(255,0,0);
  stroke(255,0,0);
  circle(noseX,noseY,20);
  image(clown-nose,noseX , noseY , 30, 30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
