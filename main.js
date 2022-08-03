function preload() {

}
function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(650, 300);
    canvas.parent("canvas");
    el_webcam = createCapture(VIDEO);
    el_webcam.hide();
}
function draw() {
    image(el_webcam, 200 , 300, 400 , 500);

    poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("Model Loaded ? No one cares .");
}