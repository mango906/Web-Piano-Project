const socket = io();
let keyboard = document.getElementById("keyboard");
let speaker = document.getElementById("speaker");
let idx;
let fired;
let sharpIdx = 0;
let audioArray = [
  {
    type: "sharp",
    key: "1",
    audio: "audio/Cs3.mp3"
  },
  {
    type: "sharp",
    key: "2",
    audio: "audio/Ds3.mp3"
  },
  {
    type: "sharp",
    key: "4",
    audio: "audio/Fs3.mp3"
  },
  {
    type: "sharp",
    key: "5",
    audio: "audio/Gs3.mp3"
  },
  {
    type: "sharp",
    key: "6",
    audio: "audio/As3.mp3"
  },
  {
    type: "sharp",
    key: "8",
    audio: "audio/Cs4.mp3"
  },
  {
    type: "sharp",
    key: "9",
    audio: "audio/Ds4.mp3"
  },
  {
    type: "sharp",
    key: "-",
    audio: "audio/Fs4.mp3"
  },
  {
    type: "sharp",
    key: "=",
    audio: "audio/Gs4.mp3"
  },
  {
    type: "sharp",
    key: "Backspace",
    audio: "audio/As4.mp3"
  },
  {
    type: "piano",
    key: "Tab",
    audio: "audio/C3.mp3"
  },
  {
    type: "piano",
    key: "q",
    audio: "audio/D3.mp3"
  },
  {
    type: "piano",
    key: "w",
    audio: "audio/E3.mp3"
  },
  {
    type: "piano",
    key: "e",
    audio: "audio/F3.mp3"
  },
  {
    type: "piano",
    key: "r",
    audio: "audio/G3.mp3"
  },
  {
    type: "piano",
    key: "t",
    audio: "audio/A3.mp3"
  },
  {
    type: "piano",
    key: "y",
    audio: "audio/B3.mp3"
  },
  {
    type: "piano",
    key: "u",
    audio: "audio/C4.mp3"
  },
  {
    type: "piano",
    key: "i",
    audio: "audio/D4.mp3"
  },
  {
    type: "piano",
    key: "o",
    audio: "audio/E4.mp3"
  },
  {
    type: "piano",
    key: "p",
    audio: "audio/F4.mp3"
  },
  {
    type: "piano",
    key: "[",
    audio: "audio/G4.mp3"
  },
  {
    type: "piano",
    key: "]",
    audio: "audio/A4.mp3"
  },
  {
    type: "piano",
    key: "\\",
    audio: "audio/B4.mp3"
  },
  // {
  //   type : "piano",
  //   key : "o",
  //   audio : "audio/D5.mp3"
  // }
]
const pianoArray = audioArray.filter(piano => piano.type === "piano");
const sharpArray = audioArray.filter(piano => piano.type === "sharp");

document.addEventListener("DOMContentLoaded", () =>{
  socket.emit("joined", localStorage.getItem("room"));
});

keyboard.style.listStyleType = "none";

 /*Socket Connect*/
socket.on('keydown', (payload) =>{
  console.log("keydown");
  soundEvent(payload);
});

socket.on('keyup', (payload) =>{
  console.log("keyup");
  fired = false;
  const result = audioArray.filter(audio => audio.key == payload);
  if (result.length == 0) { return; }
  keyboard.children[idx].style.transform = "translate(0px, 0px)"
});

pianoArray.forEach(element => {
  let key = document.createElement("li");
  key.innerHTML = element.key;
  key.classList.add("keyboard-key");
  keyboard.append(key);
});

sharpArray.forEach((element, i) => {
  let sharp = document.createElement("li");
  sharp.classList.add("keyboard-sharp");
  sharp.innerHTML = element.key;
  if (i == 2 || i == 5 || i == 7) {
    sharpIdx++;
  }
  let ml = `${i + 1 + sharpIdx}00` - 35;
  sharp.style.marginLeft = `${ml}px`;
  keyboard.insertBefore(sharp, keyboard.childNodes[i]);
})

// audioArray.foreach(audio => {
//   document.appendChild(keyboard);
// });

keyboard.addEventListener('mousedown', (e) =>{
  let keyboarArray = Array.from(keyboard.children);
  let idx;
  keyboarArray.forEach((keyboard, i) =>{
    if(keyboard == e.target){
      idx = i;
    }
  });
  e.preventDefault();
  soundEvent(audioArray[idx].key);
  // const result = keyboard.children.filter(audio => audio.key == e.key);
  // console.log(result);
});

keyboard.addEventListener('mouseup', (e) =>{
  fired = false;
  keyboard.children[idx].style.transform = "translate(0px, 0px)"
})

keyboard.addEventListener('blur', (e) =>{
  fired = false;
  keyboard.children[idx].style.transform = "translate(0px, 0px)"
})

document.addEventListener('keydown', (e) => {
  if (e.keyCode == 9 || e.keyCode == 8)    // keyCode 8 : Bakspace, keyCode 9 : Tab 
    e.preventDefault();
  if (!fired) {
    fired = true;
    soundEvent(e.key);
    socket.emit('keydown', e.key, localStorage.getItem("room"));
  }
});

document.addEventListener('keyup', (e) => {
  fired = false;
  const result = audioArray.filter(audio => audio.key == e.key);
  if (result.length == 0) { return; }
  keyboard.children[idx].style.transform = "translate(0px, 0px)"
  socket.emit("keyup", e.key, localStorage.getItem("room"));
});

function soundEvent(keyName) {
  const result = audioArray.filter(audio => audio.key == keyName);
  if (result.length == 0) { return; }
  idx = audioArray.indexOf(result[0]);
  keyboard.children[idx].style.transform = "translate(0px, 20px)"
  let audio = new Audio(result[0].audio);
  audio.play();
}