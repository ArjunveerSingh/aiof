s="";
function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(600,400)
    video.hide();
}
function start(){
    od= ml5.objectDetector('cocossd',ml);
document.getElementById("status").innerHTML="Status: Detecting Objects";
input=document.getElementById("input").value;
}

function ml(){
    console.log("Model Loaded!!")
    s=true;
}

function draw(){
  image(video,0,0,600,400);
  if(s != ""){
    od.detect(video,gr);
    for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="Status: Objects Detected";
        document.getElementById("number").innerHTML="Number of objects detected are:"+objects.length;
        fill("#FF0000");
        p=floor(objects[i].confidence*100);
        text(objects[i].label+""+p+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
    }
  }
}
function gr(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}