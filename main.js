let fired = false;
document.addEventListener('keydown', (e) => {
  if(!fired) {
    fired = true;
    const keyName = e.key;
    switch(keyName){
      case "q":
        audio = new Audio("audio/C4.mp3");
        audio.play();
        break;
      case "w":
        audio = new Audio("audio/D4.mp3");
        audio.play();
        break;
      case "e":
        audio = new Audio("audio/E4.mp3");
        audio.play();
        break;
      case "r":
        audio = new Audio("audio/F4.mp3");
        audio.play();
        break;
      case "t":
        audio = new Audio("audio/G4.mp3");
        audio.play();
        break;
      case "y":
        audio = new Audio("audio/A4.mp3");
        audio.play();
        break;
      case "u":
        audio = new Audio("audio/B4.mp3");
        audio.play();
        break;
      case "i":
        audio = new Audio("audio/C5.mp3");
        audio.play();  
        break;
      case "o":
        audio = new Audio("audio/D5.mp3");
        audio.play();
        break;
      case "2":
        audio = new Audio("audio/Cs4.mp3");
        audio.play();
        break;
      case "3":
        audio = new Audio("audio/Ds4.mp3");
        audio.play();
        break;
      case "5":
        audio = new Audio("audio/Fs4.mp3");
        audio.play();
        break;  
      case "6":
        audio = new Audio("audio/Gs4.mp3");
        audio.play();
        break;
      case "7":
      audio = new Audio("audio/As4.mp3");
      audio.play();
      break;
    } 
  }
});

document.addEventListener('keyup', (e) => {
  fired = false;
});