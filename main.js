//https://teachablemachine.withgoogle.com/models/NRgJPf7MAe/
function startclassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://storage.googleapis.com/tm-model/u02fOYRBx/model.json", modelready);
}
function modelready() {
    classifier.classify(gotresults);
}
function gotresults(error, results) {
if (error) {
    console.log(error)
}
else {
    console.log(results)
    document.getElementById("result_label").innerHTML="I can hear "+results[0].label;
    img=document.getElementById("Ear");
    if (results[0].label=="Barking") {
        img.src="dog.webp"
    }
    else if (results[0].label=="Meowing") {
        img.src="cat.jpeg"
    }
    else {
        img.src="ear.png"
    }
}
}