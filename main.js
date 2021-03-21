let paragraph = document.getElementById("paragraph");

paragraph.addEventListener("mouseover", function () {
  paragraph.classList.toggle("bold");
});

////////////////////////////////////////////////
// Change color after click

let btnRed = document.getElementById("btnRed");
btnRed.addEventListener("click", () => paragraph.classList.toggle("red"));

////////////////////////////////////////////////
// Increase font size by 1px

function increaseFontSize() {
  sizeValue = window.getComputedStyle(paragraph).getPropertyValue("font-size");
  currentSize = parseFloat(sizeValue);
  paragraph.style.fontSize = currentSize + 1 + "px";
}

let increase = document.getElementById("btnIncrease");
increase.addEventListener("click", increaseFontSize);


////////////////////////////////////////////////
// Audio Remote Control

// Audio Play
function play(audioSelector) {
  let audioElement = document.querySelector(audioSelector);
  audioElement.play();
}

// Audio Pause
function pause(audioSelector) {
  let audioElement = document.querySelector(audioSelector);
  audioElement.pause();
}

// Audio Restart
function play(audioSelector) {
    let audioElement = document.querySelector(audioSelector);
    audio.currentTime = 0
    audioElement.play();
  }
  
// Audio set volume
function volume(audioSelector, volumeValue) {
  let audioElement = document.querySelector(audioSelector);
  audioElement.volume = volumeValue;
}
