song1=""
song2=""
score_right_wrist=0
score_left_wrist=0
right_wristX=0
right_wristY=0
left_wristX=0
left_wristY=0



function preload(){
    song1=loadSound("26-Heart-Attack.mp3")
    song2=loadSound("wolves.mp3")
}



function setup(){
    canvas=createCanvas(600,600)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    poseNet=ml5.poseNet(video,modal_loaded)
    poseNet.on("pose",got_poses)
}


function modal_loaded(){
    console.log("Model is loaded")
}


function got_poses(results){
    console.log(results)
    if (results.length>0) {
        score_right_wrist=results[0].pose.keypoints[10].score
        score_left_wrist=results[0].pose.keypoints[9].score
        right_wristX=results[0].pose.rightWrist.x
        right_wristY=results[0].pose.rightWrist.y
        left_wristX=results[0].pose.leftWrist.x
        left_wristY=results[0].pose.leftWrist.y
    }
    }


    

function draw(){
    image(video,0,0,600,600)
}