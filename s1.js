// let string = "depu";
// let a = 123;
// let b = 12;
// let c = a+b;
// alert(string)
// alert(c)


// function click(){
    
//     alert("prajapati")
// }
// click();

let  song = document.getElementById("song");
let progress = document.getElementById("Progress")
let playicon = document.getElementById("playIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
//button of the work;
function playPause(){
    if(playicon.classList.contains("fa-pause")){
        song.pause();
        playicon.classList.remove("fa-pause")
        playicon.classList.add("fa-play")
    }
    else{
        song.play();
        playicon.classList.add("fa-pause")
        playicon.classList.remove("fa-play")
        
    }
}
//In this time set;
if(song.play){
    setInterval(() => {
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    playicon.classList.add("fa-pause")
    playicon.classList.remove("fa-play")
}
