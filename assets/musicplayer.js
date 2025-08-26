const audio = document.getElementById("audio-player");
const slider = document.getElementById("volume-slider-vertical");
const fill = document.getElementById("volume-fill");
const volumeBtn = document.getElementById("start-mute-unmute");

audio.volume = 0.5;

// SVGs
const volumeOnSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume2-icon lucide-volume-2"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>`;

const volumeOffSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-off-icon lucide-volume-off"><path d="M16 9a5 5 0 0 1 .95 2.293"></path><path d="M19.364 5.636a9 9 0 0 1 1.889 9.96"></path><path d="m2 2 20 20"></path><path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"></path><path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686"></path></svg>`;



// Set volume from Y position
function setVolumeFromY(y, animate = false) {
  const rect = slider.getBoundingClientRect();
  let percent = (rect.bottom - y) / rect.height;
  percent = Math.max(0, Math.min(1, percent));
  audio.volume = percent;
  audio.muted = percent === 0;

  if (animate) {
    anime({
      targets: fill,
      height: `${percent * 100}%`,
      duration: 150,
      easing: "easeOutQuad"
    });
  } else {
    fill.style.height = `${percent * 100}%`;
  }

  volumeBtn.innerHTML = percent > 0 ? volumeOnSVG : volumeOffSVG;
}

// Drag/move handlers (mouse)
slider.addEventListener("mousedown", (e) => {
  setVolumeFromY(e.clientY); 
  if (audio.paused) audio.play().catch(err => console.warn(err));

  function moveHandler(eMove) { setVolumeFromY(eMove.clientY); }
  function upHandler() {
    setVolumeFromY(event.clientY, true);e
    window.removeEventListener("mousemove", moveHandler);
    window.removeEventListener("mouseup", upHandler);
  }

  window.addEventListener("mousemove", moveHandler);
  window.addEventListener("mouseup", upHandler);
});

// Touch support
slider.addEventListener("touchstart", (e) => {
  setVolumeFromY(e.touches[0].clientY);
  if (audio.paused) audio.play().catch(err => console.warn(err));

  function moveHandler(eMove) { setVolumeFromY(eMove.touches[0].clientY); }
  function endHandler() {
    window.removeEventListener("touchmove", moveHandler);
    window.removeEventListener("touchend", endHandler);
  }

  window.addEventListener("touchmove", moveHandler);
  window.addEventListener("touchend", endHandler);
});

audio.volume = 0.5;
audio.muted = true;
fill.style.height = `0%`; 
let defaultVolume = 0.5; 

volumeBtn.addEventListener("click", () => {
  if (audio.paused) audio.play().catch(err => console.warn(err));

  if (audio.muted) {
    audio.muted = false;

    // Animate fill to default volume
    audio.volume = defaultVolume;
    anime({
      targets: fill,
      height: `${audio.volume * 100}%`,
      duration: 150,
      easing: "easeOutQuad"
    });

  } else {
    audio.muted = true;

    anime({
      targets: fill,
      height: `0%`,
      duration: 150,
      easing: "easeOutQuad"
    });
  }

  volumeBtn.innerHTML = audio.muted ? volumeOffSVG : volumeOnSVG;
});

slider.addEventListener("input", (e) => {
  if (audio.paused) audio.play().catch(err => console.warn(err));

  const percent = slider.value / 100;
  audio.volume = percent;
  audio.muted = percent === 0;

  if (percent > 0) defaultVolume = percent;

  fill.style.height = `${percent * 100}%`;
  volumeBtn.innerHTML = percent > 0 ? volumeOnSVG : volumeOffSVG;
});
