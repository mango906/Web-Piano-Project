let keyboard = document.getElementById("keyboard");
let speaker = document.getElementById("speaker");
let idx;
let sharpIdx = 0;
let audioArray = [
  {
    type: "sharp",
    key: "1",
    audio: "audio/Cs4.mp3"
  },
  {
    type: "sharp",
    key: "2",
    audio: "audio/Ds4.mp3"
  },
  {
    type: "sharp",
    key: "4",
    audio: "audio/Fs4.mp3"
  },
  {
    type: "sharp",
    key: "5",
    audio: "audio/Gs4.mp3"
  },
  {
    type: "sharp",
    key: "6",
    audio: "audio/As4.mp3"
  },
  {
    type: "sharp",
    key: "8",
    audio: "audio/Cs5.mp3"
  },
  {
    type: "sharp",
    key: "9",
    audio: "audio/Ds5.mp3"
  },
  {
    type: "sharp",
    key: "-",
    audio: "audio/Fs5.mp3"
  },
  {
    type: "sharp",
    key: "=",
    audio: "audio/Gs5.mp3"
  },
  {
    type: "sharp",
    key: "-",
    audio: "audio/As5.mp3"
  },
  {
    type: "piano",
    key: "Tab",
    audio: "audio/C4.mp3"
  },
  {
    type: "piano",
    key: "q",
    audio: "audio/D4.mp3"
  },
  {
    type: "piano",
    key: "w",
    audio: "audio/E4.mp3"
  },
  {
    type: "piano",
    key: "e",
    audio: "audio/F4.mp3"
  },
  {
    type: "piano",
    key: "r",
    audio: "audio/G4.mp3"
  },
  {
    type: "piano",
    key: "t",
    audio: "audio/A4.mp3"
  },
  {
    type: "piano",
    key: "y",
    audio: "audio/B4.mp3"
  },
  {
    type: "piano",
    key: "u",
    audio: "audio/C5.mp3"
  },
  {
    type: "piano",
    key: "i",
    audio: "audio/D5.mp3"
  },
  {
    type: "piano",
    key: "o",
    audio: "audio/E5.mp3"
  },
  {
    type: "piano",
    key: "p",
    audio: "audio/F5.mp3"
  },
  {
    type: "piano",
    key: "[",
    audio: "audio/G5.mp3"
  },
  {
    type: "piano",
    key: "]",
    audio: "audio/A5.mp3"
  },
  {
    type : "piano",
    key : "\\",
    audio : "audio/B5.mp3"
  },
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
  key.classList.add("keyboard-key");
  keyboard.append(key);
});

sharpArray.forEach((element, i) => {
  let sharp = document.createElement("li");
  sharp.classList.add("keyboard-sharp");
  if (i == 2 || i == 5 || i == 7) {
    sharpIdx++;
  }
  let ml = `${i+1+sharpIdx}00` - 35;
  sharp.style.marginLeft = `${ml}px`;
  keyboard.insertBefore(sharp, keyboard.childNodes[i]);
})

// audioArray.foreach(audio => {
//   document.appendChild(keyboard);
// });

document.addEventListener('keydown', (e) => {
  if(e.keyCode == 9 || e.keyCode == 8)    // keyCode 8 : Bakspace, keyCode 9 : Tab 
      e.preventDefault();
  if (!fired) {
      fired = true;
      soundEvent(e.key);
    }
});

document.addEventListener('keyup', (e) => {
  fired = false;
  const result = audioArray.filter(audio => audio.key == e.key);
  if (result.length == 0) { return; }
  keyboard.children[idx].style.transform = "translate(0px, 0px)"
});

function soundEvent(keyName) {
  const result = audioArray.filter(audio => audio.key == keyName);
  if (result.length == 0) { return; }
  idx = audioArray.indexOf(result[0]);
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