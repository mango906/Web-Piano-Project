let fired = false;
let keyboard = document.getElementById("keyboard");
let audioArray = [
  {
    key : "q",
    audio : "audio/C4.mp3"
  },
  {
    key : "w",
    audio : "audio/D4.mp3"
  },
  {
    key : "e",
    audio : "audio/E4.mp3"
  },
  {
    key : "r",
    audio : "audio/F4.mp3"
  },
  {
    key : "t",
    audio : "audio/G4.mp3"
  },
  {
    key : "y",
    audio : "audio/A4.mp3"
  },
  {
    key : "u",
    audio : "audio/B4.mp3"
  },
  {
    key : "i",
    audio : "audio/C5.mp3"
  },
  {
    key : "o",
    audio : "audio/D5.mp3"
  },
]

keyboard.style.listStyleType = "none";

audioArray.forEach(element => {
  let key = document.createElement("li");
  key.style.width = "100px";
  key.style.height = "400px";
  key.style.border = "1px solid #000";
  key.style.display = "inline-block";
  keyboard.append(key);
  console.log(keyboard)
});

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
});

function soundEvent(keyName){
  const result = audioArray.filter(audio => audio.key == keyName);
  if(!result.length) { return; }
  let audio = new Audio(result[0].audio);
  audio.play();
}