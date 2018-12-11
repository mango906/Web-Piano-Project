let fired = false;
let keyboard = document.getElementById("keyboard");
let speaker = document.getElementById("speaker");
let idx;
let audioArray = [
  {
    type : "sharp",
    key : "2",
    audio : "audio/Cs4.mp3"
  },
  {
    type : "sharp",
    key : "3",
    audio : "audio/Ds4.mp3"
  },
  {
    type : "sharp",
    key : "5",
    audio : "audio/Fs4.mp3"
  },
  {
    type : "sharp",
    key : "6",
    audio : "audio/Gs4.mp3"
  },
  {
    type : "sharp",
    key : "7",
    audio : "audio/As4.mp3"
  },
  {
    type : "piano",
    key : "q",
    audio : "audio/C4.mp3"
  },
  {
    type : "piano",
    key : "w",
    audio : "audio/D4.mp3"
  },
  {
    type : "piano",
    key : "e",
    audio : "audio/E4.mp3"
  },
  {
    type : "piano",
    key : "r",
    audio : "audio/F4.mp3"
  },
  {
    type : "piano",
    key : "t",
    audio : "audio/G4.mp3"
  },
  {
    type : "piano",
    key : "y",
    audio : "audio/A4.mp3"
  },
  {
    type : "piano",
    key : "u",
    audio : "audio/B4.mp3"
  },
  // {
  //   type : "piano",
  //   key : "i",
  //   audio : "audio/C5.mp3"
  // },
  // {
  //   type : "piano",
  //   key : "o",
  //   audio : "audio/D5.mp3"
  // }
]
const pianoArray = audioArray.filter(piano => piano.type === "piano");
const sharpArray = audioArray.filter(piano => piano.type === "sharp");


keyboard.style.listStyleType = "none";

pianoArray.forEach(element => {
  let key = document.createElement("li");
  key.style.width = "100px";
  key.style.height = "400px";
  key.style.border = "1px solid #000";
  key.style.display = "inline-block";
  keyboard.append(key);
});

sharpArray.forEach((element, i) =>{
  let sharp = document.createElement("li");
  let ml = `${element.key-1}00` - 35;
  sharp.style.position = "absolute";
  sharp.style.width = "70px";
  sharp.style.height = "270px";
  sharp.style.background = "#000";
  sharp.style.marginLeft = `${ml}px`;
  console.log(ml);
  keyboard.insertBefore(sharp, keyboard.childNodes[i]);
})

// audioArray.foreach(audio => {
//   document.appendChild(keyboard);
// });


document.addEventListener('keydown', (e) => {
  if(!fired) {
    fired = true;
    const keyName = e.key;
    soundEvent(keyName);
  }
});

document.addEventListener('keyup', (e) => {
  fired = false;
  const result = audioArray.filter(audio => audio.key == e.key);
  if(result.length == 0) { return; }
  keyboard.children[idx].style.transform = "translate(0px, 0px)"
});

function soundEvent(keyName){
  const result = audioArray.filter(audio => audio.key == keyName);
  if(result.length == 0) { return; }
  idx = audioArray.indexOf(result[0]);
  console.log(result);
  keyboard.children[idx].style.transform = "translate(0px, 20px)"
  let audio = new Audio(result[0].audio);
  audio.play();
  // if(speaker.src != "img/sound.png"){
  //   speaker.src = "img/sound.png";
  //   setTimeout(function() {  
  //   speaker.src = "img/nosound.png";
  //   }, 3000)
  // }
}