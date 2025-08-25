const audio = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("play-pause");
let animations = [];

function animateBars() {
  const bars = document.querySelectorAll(".bar");

  // clear any old animations
  animations.forEach(anim => anim.pause());
  animations = [];

  bars.forEach((bar, i) => {
    const anim = anime({
      targets: bar,
      scaleY: [
        { value: 2, duration: 300, easing: "easeInOutSine" },
        { value: 1, duration: 300, easing: "easeInOutSine" }
      ],
      delay: i * 100,
      loop: true,
      autoplay: true
    });
    animations.push(anim);
  });
}

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play().then(() => {
      playPauseBtn.textContent = "⏸";
      animateBars();
    }).catch(err => console.error("Playback error:", err));
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶";

    // stop animations
    animations.forEach(anim => anim.pause());
  }
});
