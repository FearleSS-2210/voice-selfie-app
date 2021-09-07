var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {

    document.getElementById("textbox").innerHTML=" ";
    recognition.start();

}

recognition.onresult=function run (event) {

    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;

    if (Content == "take my selfie") {

        console.log("Taking Selfie..");
        speak();

    }

}

function speak() {

    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds";
    var utter_this =  new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function(){
        capture(); 
        save();
    }, 5000);

}

Webcam.set({ width : 360, height : 240, image_format :'png', png_quality : 100});

camera = document.getElementById("camera");

function capture() {

    Webcam.snap(function(data_uri){ document.getElementById("result").innerHTML='<img id="self" src="'+data_uri+'">';} );

}


function save() {

    link=document.getElementById("link");
    image=document.getElementById("self").src;
    link.href=image;
    link.click();

}