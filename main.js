let fired = false;
let keyboard = document.getElementById("keyboard");

const audioArray = [
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
  key.classList.add("keyboard-note");
  keyboard.append(key);
});

const selectAudioByKey = key => {
  const result = audioArray.filter(element => element.key == key);
  if (result.length == 0) {
    return null;
  } else {
    return result;
  }
};

document.onkeydown = e => {
  if (!fired) {
    fired = true;
    soundEvent(selectAudioByKey(e.key));
  }
};

document.onkeyup = e => {
  if (fired) {
    fired = false;
    soundEndEvent(selectAudioByKey(e.key));
  }
};

const soundEvent = element => {
  let idx = audioArray.indexOf(element[0]);
  let audio = new Audio(element[0].audio);

  keyboard.children[idx].style.background = "yellow";
  audio.play();
};

const soundEndEvent = element => {
  let idx = audioArray.indexOf(element[0]);
  
  keyboard.children[idx].style.background = "white";
};