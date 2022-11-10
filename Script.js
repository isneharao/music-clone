console.log("Welcome to melonfy")
//Initialize the variable
let songindex = 0;
let audioElement = new Audio('songs/01.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "The Happiest Girl by Blackpink", filePath: "songs/01.mp3", coverPath: "covers/1.jpg"},
    {songName: "Kaho Na Kaho by KK", filePath: "songs/02.mp3", coverPath: "covers/2.jpg"},
    {songName: "Iski Uski from 2States", filePath: "songs/03.mp3", coverPath: "covers/3.jpg"},
    {songName: "Boy with luv By BTS", filePath: "songs/04.mp3", coverPath: "covers/4.jpg"},
    {songName: "Tally by Blackpink ", filePath: "songs/05.mp3", coverPath: "covers/5.jpg"},
    {songName: "Shut Down by Blackpink", filePath: "songs/06.mp3", coverPath: "covers/6.jpg"},
    {songName: "Ik vaari Aa by Arijit singh", filePath: "songs/07.mp3", coverPath: "covers/7.jpg"},
    {songName: "Hard To Love by Blackpink", filePath: "songs/08.mp3", coverPath: "covers/8.jpg"},
    {songName: "That That By Psy & Suga", filePath: "songs/09.mp3", coverPath: "covers/9.jpg"},
    {songName: "Mahi Ve From Kal Ho Naah Ho", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"}

]
songItem.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
   element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Event
audioElement.addEventListener('timeupdate',()=>{
    //updateseekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value = progress;
})

myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = 'songs/${songindex+1}.mp3';
        // masterSongName.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        // gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex = 0;
    }
    else{
        songindex+=1;
    }
    audioElement.src = 'songs/${songindex+1}.mp3';
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex = 0;
    }
    else{
        songindex-=1;
    }
    audioElement.src = 'songs/${songindex+1}.mp3';
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


