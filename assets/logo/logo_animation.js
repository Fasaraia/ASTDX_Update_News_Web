document.addEventListener('DOMContentLoaded', () => {
    const totalFrames = 138; // frames 0 → 138
    const logoFrame = document.getElementById('logo_frame');
    const images = [];

    function padNumber(num) {
      return String(num).padStart(5, '0');
    }

    // Preload images
    for (let i = 0; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `assets/logo/images/ASTD_${padNumber(i)}.png`;
      images.push(img);
    }

    // Wait for all images to load
    Promise.all(images.map(img => new Promise(res => img.onload = res)))
      .then(() => {
        let currentFrame = { frame: 0 };
        anime({
          targets: currentFrame,
          frame: totalFrames,
          easing: 'linear',
          round: 1,  
          duration: 5000,
          loop: false,
          update: function(anim) {
            const frameNumber = padNumber(currentFrame.frame);
            logoFrame.src = `assets/logo/images/ASTD_${frameNumber}.png`;
          },
          complete: function() {
            console.log('Logo animation finished!');
          }
        });
      });
  });
